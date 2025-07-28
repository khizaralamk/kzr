
export default function GalleryGrid() {
  return (
    <div className="w-full px-2 sm:px-4 max-w-xs md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
        {/* First column */}
        <div className="flex flex-col gap-4 md:gap-6 -mt-6 md:-mt-12 min-w-0 ">
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,fl_progressive/samples/landscapes/beach-boat.jpg" alt="Gallery 1" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Design</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_1200,c_limit/samples/landscapes/nature-mountains.jpg" alt="Gallery 2" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Development</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto,fl_progressive/samples/people/jazz.jpg" alt="Gallery 3" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Art</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto,fl_progressive/samples/people/jazz.jpg" alt="Gallery 3" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Photography</span>
          </div>
          <div className="flex-1 min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,fl_progressive/samples/landscapes/beach-boat.jpg" alt="Gallery 4" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">UI/UX</span>
          </div>
        </div>
        {/* Second column */}
        <div className="flex flex-col gap-4 md:gap-6 min-w-0">
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto,fl_progressive/samples/food/fish-vegetables.jpg" alt="Gallery 5" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Branding</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto,fl_progressive/samples/food/fish-vegetables.jpg" alt="Gallery 6" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Web Design</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/f_auto,q_auto,w_800,dpr_auto,c_fill,g_auto,fl_progressive/samples/food/fish-vegetables.jpg" alt="Gallery 6" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Mobile App</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dfgr1deco/image/upload/samples/landscapes/architecture-signs.jpg" alt="Gallery 7" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Illustration</span>
          </div>
          <div className="aspect-square min-w-0 overflow-hidden relative">
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Gallery 8" className="w-full h-full object-cover hover:scale-125 transition-transform duration-500" />
            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 text-sm font-medium rounded-full z-10 text-center">Creative</span>
          </div>
        </div>
      </div>
      
      {/* Download Portfolio Buttons */}
     
    </div>
  );
} 