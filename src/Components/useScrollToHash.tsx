import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToHash = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100) // small delay for mount
      }
    }
  }, [location])
}
