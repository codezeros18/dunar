import { useRef, useEffect, useState } from 'react';
import { useSprings, animated, SpringValue } from '@react-spring/web';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing,
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const animatedCount = useRef(0);

  // Default animations
  const defaultFrom = {
    filter: 'blur(10px)',
    opacity: 0,
    transform: direction === 'top' ? 'translateY(-50px)' : 'translateY(50px)',
  };

  const defaultTo = [
    { filter: 'blur(5px)', opacity: 0.5, transform: direction === 'top' ? 'translateY(5px)' : 'translateY(-5px)' },
    { filter: 'blur(0px)', opacity: 1, transform: 'translateY(0)' },
  ];

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
            for (const step of animationTo || defaultTo) {
              await next(step);
            }
            animatedCount.current += 1;
            if (animatedCount.current === elements.length && onAnimationComplete) {
              onAnimationComplete();
            }
          }
        : animationFrom || defaultFrom,
      delay: i * delay,
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {springs.map((props, index) => {
        const content = elements[index] === ' ' ? '\u00A0' : elements[index];

        return (
          <animated.span
            key={index}
            style={props as unknown as React.CSSProperties} // ✅ FIXED TYPE ERROR
            className="inline-block transition-transform will-change-[transform,filter,opacity]"
          >
            {content}
            {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : null}
          </animated.span>
        );
      })}
    </p>
  );
};

export default BlurText;
