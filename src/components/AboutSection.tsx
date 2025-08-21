

export default function AboutSection() {
  return (
    // container 1
    <section className="w-full min-h-screen bg-white py-24 px-6 sm:px-4 max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto  flex items-center justify-center">
      
      {/* container 2 */}
      <div className="w-full max-w-7xl mx-auto ">
        {/* Swiss Design Grid Layout - Centered */}
        <div className="flex flex-col items-center text-center">
          
          {/* Main Content - Centered */}
          <div className="md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto space-y-16">
            
            {/* Section Title with Swiss Typography */}
            <div className="space-y-4 mb-12 text-right pt-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-benne text-black leading-none tracking-tight">
                ABOUT
              </h2>
              <div className="text-xl text-gray-600 tracking-wide">
                <a href="#" className="hover:text-black transition-colors duration-300">my tech portfolio</a> | <a href="#" className="hover:text-black transition-colors duration-300">my design portfolio</a>
              </div>
            </div>
            
            {/* Main Content Block */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-justify">
                As someone who has been exploring and building with AI for a long time, I thrive on curiosity and creativity. I love turning ideas into reality, whether through code, design, or art. My journey is driven by a passion for learning, experimenting, and pushing boundaries—always eager to discover what's next and make a positive impact through technology. Every project is an opportunity to grow, connect, and inspire. Looking ahead, I'm excited to continue this journey, embracing new challenges and shaping a future where creativity and technology go hand in hand.
              </p>
            </div>
            
            {/* Key Statistics - Centered Above Download Heading */}
            <div className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-black">15+</div>
                  <div className="text-sm uppercase tracking-widest text-gray-600">Years Experience</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-black">200+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">Projects Completed</div>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-black">50+</div>
                  <div className="text-sm uppercase tracking-wider text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            

            

          </div>
        </div>
        

      </div>
    </section>
  );
} 