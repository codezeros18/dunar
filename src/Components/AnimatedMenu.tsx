import Lottie from "lottie-react";
import menuAnimation from "../assets/menuV2.json";

const AnimatedMenu = () => {
  return (
    <div className="w-16 h-16">
      <Lottie animationData={menuAnimation} loop={true} />
    </div>
  );
};

export default AnimatedMenu;
