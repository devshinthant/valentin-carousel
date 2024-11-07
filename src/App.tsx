import CardSection from "./components/CardSection"
import Description from "./components/Description"
import ProjectName from "./components/ProjectName"
import ProjectSlide from "./components/ProjectSlide"
import SubInfo from "./components/SubInfo"

function App() {
  return (
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
  )
}

export default App
