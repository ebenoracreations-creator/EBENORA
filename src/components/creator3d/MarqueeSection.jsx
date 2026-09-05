import React from 'react';

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
    category: 'Luxury Photography & Films',
    url: 'https://rohaneldhose2008.github.io/v2kozikode/',
    src: './images/projects/brownlights.png'
  },
  {
    id: 'p5',
    title: 'Naomika Designs Studio',
    category: 'Fashion Design Studio',
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
    title: 'Naomika Design Studio V2',
    category: 'Digital Brochure',
    url: 'https://rohaneldhose2008.github.io/naomikadesignstudio/',
    src: './images/projects/naomika2.png'
  }
];

export function MarqueeSection() {
  const row1Items = [...REAL_PROJECTS, ...REAL_PROJECTS, ...REAL_PROJECTS];
  const row2Items = [...REAL_PROJECTS].reverse();
  const row2Tripled = [...row2Items, ...row2Items, ...row2Items];

  const handleTileClick = (item) => {
    window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden w-full select-none">
      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
          [ SELECTED WORKS & DIGITAL EXPERIENCES ]
        </span>
        <h3 className="hero-heading text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
          Project Showcase
        </h3>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 - AUTOMATIC CONTINUOUS INFINITE LOOP (LEFT) */}
        <div className="overflow-hidden w-full relative">
          <div className="flex gap-5 w-max animate-marquee-left">
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

                {/* Details Overlay: ALWAYS VISIBLE AS REQUESTED */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-4 sm:p-5 text-left pointer-events-none">
                  <span className="text-[10px] sm:text-xs uppercase font-mono font-bold text-[#BBCCD7] tracking-wider">
                    [{item.category}]
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-black transition-all">
                      View Live Website ↗
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - AUTOMATIC CONTINUOUS INFINITE LOOP (RIGHT) */}
        <div className="overflow-hidden w-full relative">
          <div className="flex gap-5 w-max animate-marquee-right">
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

                {/* Details Overlay: ALWAYS VISIBLE AS REQUESTED */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-4 sm:p-5 text-left pointer-events-none">
                  <span className="text-[10px] sm:text-xs uppercase font-mono font-bold text-[#BBCCD7] tracking-wider">
                    [{item.category}]
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#D7E2EA] group-hover:bg-[#D7E2EA] group-hover:text-black transition-all">
                      View Live Website ↗
                    </span>
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
