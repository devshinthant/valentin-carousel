export default function SubInfo() {
  return (
    <section
      style={{
        gridColumn: "13/16",
      }}
    >
      <div className="flex flex-col items-start gap-20">
        <div className="flex flex-col items-start gap-2">
          <div className="text-sm font-medium tracking-tight opacity-50">
            Year
          </div>
          <div className="flex items-center text-2xl font-bold text-white">
            <div>20</div>
            <div className="grid overflow-hidden">
              <div
                id="card-title-1"
                style={{
                  gridArea: "1/1/2/2",
                }}
              >
                22
              </div>
              <div
                id="card-title-2"
                style={{
                  gridArea: "1/1/2/2",
                }}
                className="translate-y-[100%]"
              >
                23
              </div>
              <div
                id="card-title-3"
                style={{
                  gridArea: "1/1/2/2",
                }}
                className="translate-y-[100%]"
              >
                24
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <div className="text-sm font-medium tracking-tight opacity-50">
            Role
          </div>
          <div className="flex items-center text-lg font-medium opacity-70">
            <div className="grid overflow-hidden">
              <div
                id="card-title-1"
                style={{
                  gridArea: "1/1/2/2",
                }}
              >
                Head of Design & Brand
              </div>
              <div
                id="card-title-2"
                style={{
                  gridArea: "1/1/2/2",
                }}
                className="translate-y-[100%]"
              >
                Lead Frontend Developer
              </div>
              <div
                id="card-title-3"
                style={{
                  gridArea: "1/1/2/2",
                }}
                className="translate-y-[100%]"
              >
                Lead Product Designer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
