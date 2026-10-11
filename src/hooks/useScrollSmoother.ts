import { useEffect } from 'react'

export function useScrollSmoother(): void {
  useEffect(() => {
    const { gsap, ScrollTrigger, ScrollSmoother } = window

    if (!gsap || !ScrollTrigger || !ScrollSmoother) {
      return
    }

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const smoother = ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
    })

    return () => {
      smoother.destroy?.()
    }
  }, [])
}
