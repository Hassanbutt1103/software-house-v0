import Image from "next/image";

export default function WebDevelopmentPage() {
  return (
    <section className="px-8 md:px-16 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Image on Left with Shadow */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/images/png1.png"
            alt="Web Development"
            width={500}
            height={400}
            className="object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Text Content on Right */}
        <div className="md:w-1/2 text-left md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">
            Web Development for Multi-Channel <span className="text-primary">Visibility</span>
          </h1>
          <div className="mt-3 h-1 w-24 rounded-full bg-primary" aria-hidden="true" />
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            A website or web app is built to facilitate user engagement. Our web development services help create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. For further efficiency, we leverage threat resistance, tested architectures, continuous maintenance, and custom CMS solutions.
          </p>
        </div>

      </div>
    </section>
  );
}
