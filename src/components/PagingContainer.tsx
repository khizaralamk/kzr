import { useState, useRef, useEffect } from 'react';

interface PagingContainerProps {
  children: React.ReactNode[];
  sectionNames: string[];
}

export default function PagingContainer({ children, sectionNames }: PagingContainerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle touch/mouse events for swiping
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 100; // Minimum swipe distance to trigger page change
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentPage < children.length - 1) {
        // Swipe left - next page
        setCurrentPage(prev => prev + 1);
      } else if (diff < 0 && currentPage > 0) {
        // Swipe right - previous page
        setCurrentPage(prev => prev - 1);
      }
    }
    
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      } else if (e.key === 'ArrowRight' && currentPage < children.length - 1) {
        setCurrentPage(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, children.length]);

  // Auto-scroll to current page
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const pageWidth = container.clientWidth;
      container.scrollTo({
        left: currentPage * pageWidth,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Page Indicators */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 flex space-x-3">
        {sectionNames.map((name, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
                         className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
               currentPage === index
                 ? currentPage === 3 ? 'bg-white text-black' : 'bg-black text-white'
                 : currentPage === 3 ? 'bg-transparent text-white hover:bg-white hover:text-black' : 'bg-transparent text-black hover:bg-black hover:text-white'
             }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
        disabled={currentPage === 0}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center ${
          currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
      >
        ←
      </button>
      
      <button
        onClick={() => setCurrentPage(prev => Math.min(children.length - 1, prev + 1))}
        disabled={currentPage === children.length - 1}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center ${
          currentPage === children.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
      >
        →
      </button>

      {/* Page Counter */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-80 px-4 py-2 rounded-full text-sm font-medium">
        {currentPage + 1} / {children.length}
      </div>

      {/* Scrollable Container */}
      <div
        ref={containerRef}
        className="flex w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentPage * 100}%)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
