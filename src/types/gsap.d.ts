declare global {
  interface Window {
    gsap: {
      registerPlugin: (...plugins: unknown[]) => void
      [key: string]: unknown
    }
    ScrollTrigger: unknown
    ScrollSmoother: {
      create(config: { wrapper: string; content: string }): {
        destroy?: () => void
      }
    }
  }
}

export {}
