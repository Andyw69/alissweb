import { useEffect } from 'react'

export function useScrollTop(): void {
  useEffect(() => {
    const updateScrollTop = () => {
      document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`)
    }

    updateScrollTop()
    window.addEventListener('scroll', updateScrollTop, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollTop)
    }
  }, [])
}
