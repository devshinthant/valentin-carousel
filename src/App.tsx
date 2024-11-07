import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to("#card-1", {
      scrollTrigger: {
        trigger: "#main",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
      clipPath: "polygon(0% 0%, 0% 0%,0% 0%, 0% 0%)",
    })

    gsap.to("#card-1-img", {
      scrollTrigger: {
        trigger: "#main",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
      translateX: "-50%",
      translateY: "-50%",
    })

    gsap.to("#card-1-wrapper", {
      scrollTrigger: {
        trigger: "#main",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
      transform: "scale(0.6)",
    })

    gsap.to("#card-2", {
      scrollTrigger: {
        trigger: "#main",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
      clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
    })

    gsap.to("#card-2-img", {
      scrollTrigger: {
        trigger: "#main",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
      translateX: "0%",
      translateY: "0%",
    })

    gsap.to("#card-2-wrapper", {
      scrollTrigger: {
        trigger: "#main",
        start: "40% bottom",
        end: "70% bottom",
        scrub: true,
      },
      transform: "scale(1)",
    })

    gsap.to("#card-2", {
      immediateRender: false,
      scrollTrigger: {
        trigger: "#main",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      clipPath: "polygon(0% 0%, 0% 0%,0% 0%, 0% 0%)",
    })

    gsap.to("#card-3", {
      scrollTrigger: {
        trigger: "#main",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      clipPath: "polygon(0% 0%, 100% 0%,100% 100%, 0% 100%)",
    })

    gsap.to("#card-3-img", {
      scrollTrigger: {
        trigger: "#main",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      translateX: "0%",
      translateY: "0%",
    })

    gsap.to("#card-3-wrapper", {
      scrollTrigger: {
        trigger: "#main",
        start: "70% bottom",
        end: "bottom bottom",
        scrub: true,
      },
      transform: "scale(1)",
    })
  }, [])

  return (
    <section className="h-auto w-screen bg-black px-12">
      <section id="main" className="relative h-[400vh] w-full">
        <section
          id="sticky-section"
          className="sticky left-0 top-0 h-screen w-full"
        >
          <div
            className="grid h-full w-full gap-0 pb-[4vh] pt-[8rem]"
            style={{
              gridTemplateColumns: "repeat(16,1fr)",
            }}
          >
            {/* Project Name */}
            <div
              className=""
              style={{
                position: "relative",
                zIndex: 2,
                gridColumn: "1/4",
                gridRow: "2/3",
                alignSelf: "end",
              }}
            >
              Project name
            </div>
            {/* Project Name */}

            {/* Project Slide */}
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gridColumn: "1/3",
                width: "6.6rem",
              }}
            >
              Project slide
            </div>
            {/* Project Slide */}

            <div
              className="relative h-full"
              style={{
                gridColumn: "5/11",
                gridRow: "1/3",
              }}
            >
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
                    clipPath:
                      "polygon(100% 100%, 100% 100%,100% 100%, 100% 100%)",
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
                      style={{
                        transform: "50%,50%",
                      }}
                      className="h-full object-cover object-center"
                      src="https://valentincheval.design/_astro/gotymebank.D2jICiWb_Z8ICOc.webp"
                    />
                  </div>
                </div>

                <div
                  id="card-3"
                  className="relative h-full w-full"
                  style={{
                    gridArea: "1/1/2/2",
                    clipPath:
                      "polygon(100% 100%, 100% 100%,100% 100%, 100% 100%)",
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
                        transform: "50%,50%",
                      }}
                      className="h-full object-cover object-center"
                      src="https://valentincheval.design/_astro/define-hero.D97LaZGw_ZaAv2R.webp"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Info */}
            <div
              style={{
                gridColumn: "13/16",
              }}
            >
              {" "}
              Sub info
            </div>
            {/* Sub Info */}

            {/* Description */}
            <div
              style={{
                gridColumn: "13/17",
                alignSelf: "end",
              }}
            >
              Description
            </div>
          </div>
        </section>

        {/* <img src="https://valentincheval.design/_astro/define-hero.D97LaZGw_ZaAv2R.webp" />
        <img src="https://valentincheval.design/_astro/gotymebank.D2jICiWb_Z8ICOc.webp" />
        <img
          className="h-full w-[60%]"
          src="https://valentincheval.design/_astro/bitmex-cover.DpIAWMTO_1rVh1Q.webp"
        /> */}
      </section>
    </section>
  )
}

export default App
