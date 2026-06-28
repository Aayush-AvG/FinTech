'use client'
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useFadeOnScroll(selector = ".fade-section", gsapReady) {
  useEffect(() => {
    const init = () => {
      const sections = document.querySelectorAll(selector)
      if (!sections.length) return

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0

        if (isInView) {
          gsap.set(section, { opacity: 1 })

          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "bottom 10%",
              end: "bottom -20%",
              scrub: 0.5,
            },
          }).to(section, {
            opacity: 0,
            ease: "power2.in",
            duration: 0.4,
          })
        } else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 0.5,
            },
          })

          tl.fromTo(
            section,
            { opacity: 0 },
            { opacity: 1, ease: "power2.out", duration: 0.4 }
          ).to(section, {
            opacity: 0,
            ease: "power2.in",
            duration: 0.4,
          })
        }
      })

      ScrollTrigger.refresh()
    }

    const interval = setInterval(() => {
      if (gsapReady?.current) {
        init()
        clearInterval(interval)
      }
    }, 50)

    return () => {
      clearInterval(interval)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [selector])
}