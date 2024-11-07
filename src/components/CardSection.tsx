import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function CardSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const animations = [
      gsap.to("#card-1", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
        },
        ease: "none",
        clipPath: "polygon(0% 0%, 0% 0%,0% 0%, 0% 0%)",
      }),

      gsap.to("#card-1-img", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
        },
        ease: "none",
        translateX: "-50%",
        translateY: "-50%",
      }),

      gsap.to("#card-1-wrapper", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
        },
        ease: "none",
        scale: 0.6,
      }),

      gsap.to("#card-2", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
        },
        ease: "none",
        clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
      }),

      gsap.to("#card-2-img", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
        },
        ease: "none",
        transform: "translate(0%, 0%)",
      }),

      gsap.to("#card-2-wrapper", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "30% bottom",
          end: "70% bottom",
          scrub: true,
        },
        ease: "none",
        scale: 1,
      }),

      gsap.to("#card-2", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        clipPath: "polygon(0% 0%, 0% 0%,0% 0%, 0% 0%)",
      }),

      gsap.to("#card-2-img", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        translateX: "-50%",
        translateY: "-50%",
      }),

      gsap.to("#card-2-wrapper", {
        immediateRender: false,
        scrollTrigger: {
          trigger: "#main",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        scale: 0.6,
      }),

      gsap.to("#card-3", {
        scrollTrigger: {
          trigger: "#main",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
      }),

      gsap.to("#card-3-img", {
        scrollTrigger: {
          trigger: "#main",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        translateX: "0%",
        translateY: "0%",
      }),

      gsap.to("#card-3-wrapper", {
        scrollTrigger: {
          trigger: "#main",
          start: "70% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "none",
        scale: 1,
      }),
    ]

    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener("resize", handleResize)

    return () => {
      animations.forEach((animation) => animation.scrollTrigger?.kill())
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative col-start-5 col-end-11 row-start-1 row-end-3 h-full">
      <div className="grid h-full w-full">
        <div
          id="card-1"
          className="relative h-full w-full"
          style={{
            gridArea: "1/1/2/2",
            clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
          }}
        >
          <div
            id="card-1-wrapper"
            style={{
              transformOrigin: "25% 25%",
              transform: "scale(1)",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              id="card-1-img"
              className="h-full object-cover object-center"
              src="https://valentincheval.design/_astro/bitmex-cover.DpIAWMTO_1rVh1Q.webp"
            />
          </div>
        </div>

        <div
          id="card-2"
          className="relative h-full w-full"
          style={{
            gridArea: "1/1/2/2",
            clipPath: "polygon(100% 100%, 100% 100%,100% 100%, 100% 100%)",
          }}
        >
          <div
            id="card-2-wrapper"
            style={{
              transformOrigin: "25% 25%",
              transform: "scale(1.4)",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              id="card-2-img"
              className="absolute h-full w-full translate-x-1/2 translate-y-1/2 object-cover object-center"
              src="https://valentincheval.design/_astro/define-hero.D97LaZGw_ZaAv2R.webp"
            />
          </div>
        </div>

        <div
          id="card-3"
          className="relative h-full w-full"
          style={{
            gridArea: "1/1/2/2",
            clipPath: "polygon(100% 100%, 100% 100%,100% 100%, 100% 100%)",
          }}
        >
          <div
            id="card-3-wrapper"
            style={{
              transformOrigin: "25% 25%",
              transform: "scale(1.4)",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              id="card-3-img"
              style={{
                transform: "translate(50%,50%)",
              }}
              className="absolute h-full w-full object-cover object-center"
              src="https://valentincheval.design/_astro/gotymebank.D2jICiWb_Z8ICOc.webp"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
