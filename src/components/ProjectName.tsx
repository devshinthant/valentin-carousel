import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

export default function ProjectName() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#card-title-1", {
      scrollTrigger: {
        trigger: "#main",
        start: "65% bottom",
        end: "70% bottom",
        scrub: true,
      },
      translateY: "-70%",
      opacity: 0,
    })

    gsap.to("#card-title-2", {
      scrollTrigger: {
        trigger: "#main",
        start: "67.5% bottom",
        end: "72.5% bottom",
        scrub: true,
      },
      translateY: "0%",
      opacity: 1,
    })

    gsap.to("#card-title-2", {
      immediateRender: false,
      scrollTrigger: {
        trigger: "#main",
        start: "92% bottom",
        end: "97% bottom",
        scrub: true,
      },
      translateY: "-70%",
      opacity: 0,
    })

    gsap.to("#card-title-3", {
      scrollTrigger: {
        trigger: "#main",
        start: "94.5% bottom",
        end: "99.5% bottom",
        scrub: true,
      },
      translateY: "0%",
      opacity: 1,
    })
  }, [])

  return (
    <section
      style={{
        position: "relative",
        zIndex: 2,
        gridColumn: "1/4",
        gridRow: "2/3",
        alignSelf: "end",
      }}
    >
      <div className="flex flex-col items-start gap-5">
        <div className="flex w-fit items-center gap-3 border-b border-gray-800 pb-4">
          <div className="flex items-center overflow-hidden font-semibold tracking-tight">
            <div>0</div>
            <div className="grid overflow-hidden">
              <div
                id="card-title-1"
                style={{
                  gridArea: "1/1/2/2",
                }}
              >
                1
              </div>
              <div
                id="card-title-2"
                style={{
                  gridArea: "1/1/2/2",
                }}
                className="translate-y-[80%]"
              >
                2
              </div>
              <div
                id="card-title-3"
                style={{
                  gridArea: "1/1/2/2",
                }}
                className="translate-y-[80%]"
              >
                3
              </div>
            </div>
          </div>
          <div className="font-semibold opacity-20">/</div>
          <div className="font-semibold tracking-tight opacity-20">03</div>
        </div>
        <div className="grid overflow-hidden">
          <div
            id="card-title-1"
            className="whitespace-nowrap text-7xl font-medium tracking-wide"
            style={{
              gridArea: "1/1/2/2",
            }}
          >
            BITMEX
          </div>
          <div
            id="card-title-2"
            style={{
              gridArea: "1/1/2/2",
            }}
            className="translate-y-[70%] whitespace-nowrap text-7xl font-medium tracking-wide opacity-0"
          >
            DEFI CHAIN
          </div>

          <div
            id="card-title-3"
            style={{
              gridArea: "1/1/2/2",
            }}
            className="translate-y-[70%] whitespace-nowrap text-7xl font-medium tracking-wide opacity-0"
          >
            TYME BANK
          </div>
        </div>
      </div>
    </section>
  )
}
