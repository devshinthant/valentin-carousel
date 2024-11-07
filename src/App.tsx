import { useEffect, useRef } from "react"
import gsap from "gsap"
import { LenisRef, ReactLenis } from "lenis/react"
import CardSection from "./components/CardSection"
import Description from "./components/Description"
import ProjectName from "./components/ProjectName"
import ProjectSlide from "./components/ProjectSlide"
import SubInfo from "./components/SubInfo"

function App() {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 100)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root ref={lenisRef}>
      <section className="h-auto w-screen bg-black px-12">
        <section id="main" className="relative h-[500vh] w-full">
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
              <ProjectName />

              <ProjectSlide />

              <CardSection />

              <SubInfo />

              <Description />
            </div>
          </section>
        </section>
      </section>
    </ReactLenis>
  )
}

export default App
