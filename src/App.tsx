import { useEffect, useRef } from "react"
import gsap from "gsap"
import { LenisRef, ReactLenis } from "lenis/react"
import CardSection from "./components/CardSection"

function App() {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 950)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: true }} ref={lenisRef}>
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

              <CardSection />

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
        </section>
      </section>
    </ReactLenis>
  )
}

export default App
