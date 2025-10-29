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
    className="w-full object-cover"
  />
  
  <div className="absolute inset-0 flex flex-col justify-center items-start px-10 space-y-15 bg-black/50">
    <h1 className="text-7xl font-bold text-white tracking-tight">
      We build fast, reliable <br /> <span className="text-primary">web</span> and{" "}
      <span className="text-primary">mobile</span> apps
    </h1>
    <p className="mt-4 text-lg text-gray-200 max-w-2xl">
      From landing pages to complex platforms, we design and ship products that scale.
    </p>
    <div className="mt-6 flex items-center gap-3">
      <button className="shadow-none backdrop-blur-sm bg-white/20 text-white  px-5 py-4 font-bold text-xl rounded-sm">
        <a href="#services">GET IN TOUCH</a>
      </button>
    </div>
  </div>
</section>

  )
}
