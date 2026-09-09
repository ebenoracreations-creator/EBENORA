import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REAL_PROJECTS = [
  {
    id: 'p1',
    title: 'Double Layer Photography',
    category: 'Studio & Photography Portfolio',
    url: 'https://doublelayerphotography.com/',
    src: './images/projects/doublelayer.png'
  },
  {
    id: 'p2',
    title: 'Pictura Australia',
    category: 'Creative Photography Web',
    url: 'https://pictura.au/',
    src: './images/projects/pictura.png'
  },
  {
    id: 'p3',
    title: 'Trendy Pearls Australia',
    category: 'Luxury Jewellery E-Commerce',
    url: 'https://trendypearls.au/',
    src: './images/projects/trendypearls.png'
  },
  {
    id: 'p4',
    title: 'Brown Lights Media',
    category: 'Website Under Creation',
    isUnderConstruction: true,
    url: 'https://rohaneldhose2008.github.io/v2kozikode/',
    src: './images/projects/brownlights.png'
  },
  {
    id: 'p5',
    title: 'Naomika Designs Studio',
    category: 'Website Under Creation',
    isUnderConstruction: true,
    url: 'https://rohaneldhose2008.github.io/naomika_designs_studio/index.html',
    src: './images/projects/naomika.png'
  },
  {
    id: 'p6',
    title: 'Ebin & Alana',
    category: 'Digital Wedding Invitation',
    url: 'https://rohaneldhose2008.github.io/ebin-alana/',
    src: './images/projects/ebinalana.png'
  },
  {
    id: 'p7',
    title: 'Baptism of David Mathuis',
    category: 'Digital Web Invitation',
    url: 'https://baptismofdavidmathuis.netlify.app/',
    src: './images/projects/baptismofdavid.png'
  },
  {
    id: 'p8',
    title: 'Franklin & Sarah',
    category: 'Digital Web Invitation',
    url: 'https://nexoracreation.github.io/Franklin-Sarah/',
    src: './images/projects/franklinsarah.png'
  },
  {
    id: 'p9',
    title: 'Naomika Design Studio Browser',
    category: 'Digital Brochure',
    url: 'https://rohaneldhose2008.github.io/naomikadesignstudio/',
    src: './images/projects/naomika2.png'
  }
];

export function MarqueeSection() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const row1Items = [...REAL_PROJECTS, ...REAL_PROJECTS, ...REAL_PROJECTS];
  const row2Items = [...REAL_PROJECTS].reverse();
  const row2Tripled = [...row2Items, ...row2Items, ...row2Items];

  const handleSlideLeft = () => {
    if (row1Ref.current) row1Ref.current.scrollBy({ left: -450, behavior: 'smooth' });
    if (row2Ref.current) row2Ref.current.scrollBy({ left: -450, behavior: 'smooth' });
  };

  const handleSlideRight = () => {
    if (row1Ref.current) row1Ref.current.scrollBy({ left: 450, behavior: 'smooth' });
    if (row2Ref.current) row2Ref.current.scrollBy({ left: 450, behavior: 'smooth' });
  };

  const handleTileClick = (item) => {
    if (item.isUnderConstruction) {
      alert('Website Under Creation — This website is currently in progress and will be launching soon!');
      return;
    }
    window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden w-full select-none">
      {/* Title & Slide Controls */}
      <div className="max-w-6xl mx-auto px-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="hero-heading text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Project Showcase
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#BBCCD7] mt-1">
            Hover to view details • Slide left or right to explore
          </p>
        </div>

        {/* Slide Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSlideLeft}
            aria-label="Slide Left"
            className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white transition-all shadow-lg active:scale-90 cursor-pointer"
            title="Slide Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleSlideRight}
            aria-label="Slide Right"
            className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white transition-all shadow-lg active:scale-90 cursor-pointer"
            title="Slide Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 - AUTOMATIC CONTINUOUS INFINITE LOOP (LEFT) */}
        <div
          ref={row1Ref}
          className="overflow-x-auto scrollbar-none w-full relative cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-5 w-max animate-marquee-left hover:[animation-play-state:paused]">
            {row1Items.map((item, index) => (
              <div
                key={`r1-${index}`}
                onClick={() => handleTileClick(item)}
                className="w-[300px] h-[210px] sm:w-[380px] sm:h-[250px] md:w-[420px] md:h-[280px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 cursor-pointer group relative flex flex-col justify-between"
              >
                {/* Real Website Screenshot */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500 bg-neutral-950"
                  loading="lazy"
                />

                {/* Details Overlay: VISIBLE ONLY ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-4 sm:p-5 text-left pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] sm:text-xs uppercase font-mono font-bold text-[#BBCCD7] tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <div className="pt-2">
                    {item.isUnderConstruction ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300">
                        ⏳ Website Under Creation
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-black transition-all">
                        View Live Website ↗
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - AUTOMATIC CONTINUOUS INFINITE LOOP (RIGHT) */}
        <div
          ref={row2Ref}
          className="overflow-x-auto scrollbar-none w-full relative cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-5 w-max animate-marquee-right hover:[animation-play-state:paused]">
            {row2Tripled.map((item, index) => (
              <div
                key={`r2-${index}`}
                onClick={() => handleTileClick(item)}
                className="w-[300px] h-[210px] sm:w-[380px] sm:h-[250px] md:w-[420px] md:h-[280px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 cursor-pointer group relative flex flex-col justify-between"
              >
                {/* Real Website Screenshot */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500 bg-neutral-950"
                  loading="lazy"
                />

                {/* Details Overlay: VISIBLE ONLY ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-4 sm:p-5 text-left pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] sm:text-xs uppercase font-mono font-bold text-[#BBCCD7] tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <div className="pt-2">
                    {item.isUnderConstruction ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/40 text-[11px] font-bold text-amber-300">
                        ⏳ Website Under Creation
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-black transition-all">
                        View Live Website ↗
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarqueeSection;
