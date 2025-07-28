

export default function AboutSection() {
  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-9 py-12 md:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Heading */}
        <div className="flex w-full justify-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-benne text-center">more about me</h2>
        </div>
        
        {/* Subheading: Quote Icon and Text */}
        <div className="flex flex-col sm:flex-row items-start w-full justify-center mb-16 md:mb-20">
          <span className="text-5xl sm:text-6xl md:text-7xl text-black mb-6 sm:mb-0 sm:mr-8 sm:mt-2 self-center sm:self-start">&#8220;</span>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 leading-relaxed text-justify px-12 sm:px-0 max-w-4xl">
            As someone who has been exploring and building with AI for a long time, I thrive on curiosity and creativity. I love turning ideas into reality, whether through code, design, or art. My journey is driven by a passion for learning, experimenting, and pushing boundaries—always eager to discover what's next and make a positive impact through technology. Every project is an opportunity to grow, connect, and inspire. Looking ahead, I'm excited to continue this journey, embracing new challenges and shaping a future where creativity and technology go hand in hand.
          </p>
        </div>

        {/* Download Portfolio Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 w-full max-w-4xl mx-auto px-8 md:px-0">
          <button className="flex-1 border-2 border-black px-2 py-3 text-base font-semibold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide">
            Download Development Portfolio
          </button>
          <button className="flex-1 border-2 border-black px-6 py-3 text-base font-semibold uppercase tracking-wide relative overflow-hidden group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Download Design Portfolio</span>
            <div className="absolute inset-0 bg-black transform scale-y-0 origin-center transition-transform duration-500 ease-out group-hover:scale-y-100"></div>
          </button>
        </div>
      </div>
    </section>
  );
} 