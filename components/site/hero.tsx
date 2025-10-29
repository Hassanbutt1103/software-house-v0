import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-background">
      <video
        src="/frontpageVID/home.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block w-full h-screen object-cover"
      />

       {/* ✅ Mobile Video */}
      <video
        src="/frontpageVID/home.mp4" // 🎥 use a lightweight mobile-optimized video here
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden w-full h-screen object-cover"
      />

      {/* ✅ Desktop View */}
      <div className="absolute inset-0 hidden md:flex flex-col justify-center items-start px-16 space-y-10 bg-black/50">
        <h1 className="text-7xl font-bold text-white tracking-tight">
          We build fast, reliable <br />
          <span className="text-primary">web</span> and{" "}
          <span className="text-primary">mobile</span> apps
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl">
          From landing pages to complex platforms, we design and ship products that scale.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <button className="shadow-none backdrop-blur-sm bg-white/20 text-white px-5 py-4 font-bold text-xl rounded-sm">
            <a href="#services">GET IN TOUCH</a>
          </button>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="absolute inset-0 flex md:hidden flex-col justify-center items-start text-start px-6 space-y-6 bg-black/60">
        <h1 className="text-4xl font-bold text-white">
          Fast & Reliable <br />
          <span className="text-primary">Web</span> &{" "}
          <span className="text-primary">Mobile</span> Apps
        </h1>
        <p className="text-base text-gray-200">
          Design and build products that scale with performance.
        </p>
        <button className="shadow-none backdrop-blur-sm bg-white/20 text-white px-4 py-3 font-semibold rounded-sm">
          <a href="#services">GET IN TOUCH</a>
        </button>
      </div>
    </section>
  )
}
