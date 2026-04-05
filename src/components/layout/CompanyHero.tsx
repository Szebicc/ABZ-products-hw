import logo from "@/assets/logo.png" 
import { series, company } from "@/lib/data"

export default function CompanyHero() {
  const scrollToDrones = () => {
    document
      .querySelector("#drone-listings")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-20 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="insert-0 absolute h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://abzinnovation.com/wp-content/uploads/2025/04/25-000-Web-video-Horizontal.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <img
          src={logo}
          alt="ABZ Innovation Logo"
          className="mx-auto mb-6 h-16 w-auto"
        />

        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          {company.name}:{<span className="text-orange-500">{company.tagline}</span>}
          
        </h1>

        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          {company.description}
        </p>

        <button
          onClick={scrollToDrones}
          className="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Explore Our Drones
        </button>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {series.map((s) => (
            <div
              key={s.id}
              className="rounded-3xl bg-white/5 p-4 text-left ring-1 ring-white/10"
            >
              <span className="block text-xs tracking-[0.2em] text-orange-300 uppercase">
                {s.category}
              </span>
              <span className="mt-2 block text-base font-semibold text-white">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
