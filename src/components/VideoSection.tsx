export default function VideoSection() {
  return (
    <section className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/NSAOrGb9orM?autoplay=1&mute=1&loop=1&playlist=NSAOrGb9orM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          className="w-full h-full"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-benne mb-6">
          Watch My Work
        </h2>
                 <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
           See my creative process and projects in action
         </p>
      </div>
    </section>
  );
}
