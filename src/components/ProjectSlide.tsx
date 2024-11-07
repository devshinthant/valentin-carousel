import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function ProjectSlide() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#progress-slider", {
      ease: "none",
      scrollTrigger: {
        trigger: "#main",
        start: "38% bottom",
        end: "60% bottom",
        scrub: true,
        onLeave: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-1", {
            height: "0.2rem",
            backgroundColor: "#303134",
          })
          tl.to("#progress-slider", {
            opacity: 0,
            ease: "none",
          })
        },
        onEnterBack: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-1", {
            height: "7rem",
          })
          tl.to("#progress-slider", {
            opacity: 1,
            ease: "none",
          })
        },
      },
      background:
        "conic-gradient(rgba(255,61,0,0) 0deg,var(--accent-color) 360deg,rgba(255,61,0,0) 360deg,rgba(255,61,0,0) 360deg) border-box",
    })

    gsap.to("#progress-slider-2", {
      ease: "none",
      scrollTrigger: {
        trigger: "#main",
        start: "60% bottom",
        end: "82% bottom",
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-2", {
            height: "7rem",
            backgroundColor: "#303134",
          })
          tl.to("#progress-slider-2", {
            opacity: 1,
            ease: "none",
          })
        },
        onLeave: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-2", {
            height: "0.2rem",
          })
          tl.to("#progress-slider-2", {
            opacity: 0,
            ease: "none",
          })
        },
        onLeaveBack: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-2", {
            height: "0.2rem",
          })
          tl.to("#progress-slider-2", {
            opacity: 0,
            ease: "none",
          })
        },
        onEnterBack: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-2", {
            height: "7rem",
          })
          tl.to("#progress-slider-2", {
            opacity: 1,
            ease: "none",
          })
        },
      },
      background:
        "conic-gradient(rgba(255,61,0,0) 0deg,var(--accent-color) 360deg,rgba(255,61,0,0) 360deg,rgba(255,61,0,0) 360deg) border-box",
    })

    gsap.to("#progress-slider-3", {
      ease: "none",
      scrollTrigger: {
        trigger: "#main",
        start: "82% bottom",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-3", {
            height: "7rem",
            backgroundColor: "#303134",
          })
          tl.to("#progress-slider-3", {
            opacity: 1,
            ease: "none",
          })
        },
        onLeave: () => {
          gsap.to("#progress-slider-3", {
            opacity: 0,
            ease: "none",
          })
        },
        onLeaveBack: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-3", {
            height: "0.2rem",
          })
          tl.to("#progress-slider-3", {
            opacity: 0,
            ease: "none",
          })
        },
        onEnterBack: () => {
          const tl = gsap.timeline()
          tl.to("#slide-item-3", {
            height: "7rem",
          })
          tl.to("#progress-slider-3", {
            opacity: 1,
            ease: "none",
          })
        },
      },
      background:
        "conic-gradient(rgba(255,61,0,0) 0deg,var(--accent-color) 360deg,rgba(255,61,0,0) 360deg,rgba(255,61,0,0) 360deg) border-box",
    })
  }, [])

  return (
    <section
      className="col-start-1 col-end-2 gap-5 overflow-hidden"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        id="slide-item-1"
        className="relative flex h-[7rem] w-full items-center justify-center overflow-hidden bg-transparent"
      >
        <div id="progress" className="absolute inset-0 z-[2] overflow-hidden">
          <div
            style={{
              zIndex: 2,
              position: "absolute",
              inset: 0,
              border: "0.2rem solid transparent",
              background: "#303134",
            }}
          />
          <div
            id="progress-slider"
            className="absolute z-[3] h-full w-full -translate-x-[50%] -translate-y-[50%] border-[0.2rem] border-transparent opacity-100 will-change-[background]"
            style={{
              inset: "50% 0 0 50%",
              background:
                "conic-gradient(rgba(255,61,0,0) 0deg,var(--accent-color) 0deg,rgba(255,61,0,0) 0deg,rgba(255,61,0,0) 360deg) border-box",
            }}
          />
        </div>
        <div
          id="img"
          className="absolute z-[3] flex h-[calc(100%-0.6rem)] w-[calc(100%-0.6rem)] items-center justify-center"
        >
          <img
            src="https://valentincheval.design/_astro/bitmex-cover.DpIAWMTO_pghcX.webp"
            className="h-full max-h-[108px] w-full max-w-[132px] scale-100 object-cover object-center"
          />
        </div>
      </div>

      <div
        id="slide-item-2"
        className="relative flex h-[0.2rem] w-full items-center justify-center overflow-hidden bg-transparent"
      >
        <div id="progress-2" className="absolute inset-0 z-[2] overflow-hidden">
          <div
            style={{
              zIndex: 2,
              position: "absolute",
              inset: 0,
              border: "0.2rem solid transparent",
              background: "#303134",
            }}
          />
          <div
            id="progress-slider-2"
            className="absolute z-[3] h-full w-full -translate-x-[50%] -translate-y-[50%] border-[0.2rem] border-transparent opacity-100 will-change-[background]"
            style={{
              inset: "50% 0 0 50%",
              background:
                "conic-gradient(rgba(255,61,0,0) 0deg,var(--accent-color) 0deg,rgba(255,61,0,0) 0deg,rgba(255,61,0,0) 360deg) border-box",
            }}
          />
        </div>
        <div className="absolute z-[3] flex h-[calc(100%-0.6rem)] w-[calc(100%-0.6rem)] items-center justify-center">
          <img
            src="https://valentincheval.design/_astro/define-hero.D97LaZGw_ZaAv2R.webp"
            className="h-full max-h-[108px] w-full max-w-[132px] scale-100 object-cover object-center"
          />
        </div>
      </div>

      <div
        id="slide-item-3"
        className="relative flex h-[0.2rem] w-full items-center justify-center overflow-hidden bg-transparent"
      >
        <div id="progress-3" className="absolute inset-0 z-[2] overflow-hidden">
          <div
            style={{
              zIndex: 2,
              position: "absolute",
              inset: 0,
              border: "0.2rem solid transparent",
              background: "#303134",
            }}
          />
          <div
            id="progress-slider-3"
            className="absolute z-[3] h-full w-full -translate-x-[50%] -translate-y-[50%] border-[0.2rem] border-transparent opacity-100 will-change-[background]"
            style={{
              inset: "50% 0 0 50%",
              background:
                "conic-gradient(rgba(255,61,0,0) 0deg,var(--accent-color) 0deg,rgba(255,61,0,0) 0deg,rgba(255,61,0,0) 360deg) border-box",
            }}
          />
        </div>
        <div className="absolute z-[3] flex h-[calc(100%-0.6rem)] w-[calc(100%-0.6rem)] items-center justify-center">
          <img
            src="https://valentincheval.design/_astro/gotymebank.D2jICiWb_Z8ICOc.webp"
            className="h-full max-h-[108px] w-full max-w-[132px] scale-100 object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
