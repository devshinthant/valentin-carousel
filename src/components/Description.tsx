export default function Description() {
  return (
    <section
      style={{
        gridColumn: "13/17",
        alignSelf: "end",
      }}
    >
      <div className="flex flex-col items-start gap-28">
        <div className="flex flex-col items-start gap-2">
          <div className="text-sm font-medium tracking-tight opacity-50">
            Description
          </div>
          <div className="text-md flex items-center font-medium opacity-70">
            One of the fastest digital bank in SEA and Africa, Tyme Bank is an
            ambitious young bank. I worked as a lead product designer, focusing
            on their investment product suite and branding
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-md font-medium text-[var(--accent-color)] underline">
            All projects
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-[-45deg] scale-75"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
