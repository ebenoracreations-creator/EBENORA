import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

const PROJECTS = [
  {
    id: "p1",
    num: "01",
    name: "Double Layer Photography",
    title: "Double Layer Photography Studio",
    url: "https://doublelayerphotography.com/",
    category: "Studio & Photography Portfolio",
    col1Img1: "./images/projects/doublelayer.png",
    col1Img2: "https://doublelayerphotography.com/images/Tony/DLP_1000.jpg",
    col2Img: "./images/projects/doublelayer.png"
  },
  {
    id: "p2",
    num: "02",
    name: "Pictura Australia",
    title: "Pictura Australia Visual Experience",
    url: "https://pictura.au/",
    category: "Creative Photography Web",
    col1Img1: "./images/projects/pictura.png",
    col1Img2: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    col2Img: "./images/projects/pictura.png"
  },
  {
    id: "p3",
    num: "03",
    name: "Trendy Pearls Australia",
    title: "Trendy Pearls E-Commerce",
    url: "https://trendypearls.au/",
    category: "Luxury Jewellery E-Commerce",
    col1Img1: "./images/projects/trendypearls.png",
    col1Img2: "https://trendypearls.au/images/hero_banner.jpg",
    col2Img: "./images/projects/trendypearls.png"
  },
  {
    id: "p4",
    num: "04",
    name: "Brown Lights Media",
    title: "Brown Lights Media Kozhikode",
    url: "https://rohaneldhose2008.github.io/v2kozikode/",
    category: "Luxury Photography & Films",
    col1Img1: "./images/projects/brownlights.png",
    col1Img2: "https://rohaneldhose2008.github.io/v2kozikode/assets/images/STRIPEGALLERY/5.jpg",
    col2Img: "./images/projects/brownlights.png"
  },
  {
    id: "p5",
    num: "05",
    name: "Naomika Designs Studio",
    title: "Naomika Designs Fashion Studio",
    url: "https://rohaneldhose2008.github.io/naomika_designs_studio/index.html",
    category: "Fashion Design Studio",
    col1Img1: "./images/projects/naomika.png",
    col1Img2: "https://rohaneldhose2008.github.io/naomika_designs_studio/images/1.jpeg",
    col2Img: "./images/projects/naomika.png"
  },
  {
    id: "p6",
    num: "06",
    name: "Ebin & Alana",
    title: "Ebin & Alana Wedding Experience",
    url: "https://rohaneldhose2008.github.io/ebin-alana/",
    category: "Digital Wedding Invitation",
    col1Img1: "./images/projects/ebinalana.png",
    col1Img2: "https://rohaneldhose2008.github.io/ebin-alana/images/couple.jpeg",
    col2Img: "./images/projects/ebinalana.png"
  },
  {
    id: "p7",
    num: "07",
    name: "Baptism of David Mathuis",
    title: "David Mathuis Baptism Celebration",
    url: "https://baptismofdavidmathuis.netlify.app/",
    category: "Digital Web Invitation",
    col1Img1: "./images/projects/baptismofdavid.png",
    col1Img2: "https://baptismofdavidmathuis.netlify.app/assets/MAIN-DpWFpdPl.jpeg",
    col2Img: "./images/projects/baptismofdavid.png"
  },
  {
    id: "p8",
    num: "08",
    name: "Franklin & Sarah",
    title: "Franklin & Sarah Celebration",
    url: "https://nexoracreation.github.io/Franklin-Sarah/",
    category: "Digital Web Invitation",
    col1Img1: "./images/projects/franklinsarah.png",
    col1Img2: "https://nexoracreation.github.io/Franklin-Sarah/images/couple.jpeg",
    col2Img: "./images/projects/franklinsarah.png"
  },
  {
    id: "p9",
    num: "09",
    name: "Naomika Design Studio V2",
    title: "Naomika Design Experience V2",
    url: "https://rohaneldhose2008.github.io/naomikadesignstudio/",
    category: "Digital Brochure",
    col1Img1: "./images/projects/naomika2.png",
    col1Img2: "./images/projects/naomika.png",
    col2Img: "./images/projects/naomika2.png"
  }
];

function Card({ project, index, totalCards, scrollYProgress }) {
  const containerRef = useRef(null);
  
  // Consistent subtle scale for perfectly uniform cards
  const targetScale = 1 - (totalCards - 1 - index) * 0.012;
  const start = index / totalCards;
  const end = 1;
  const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);

  const handleOpenSite = (e) => {
    if (e) e.stopPropagation();
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      ref={containerRef}
      className="h-[80vh] flex items-center justify-center sticky top-20 sm:top-24 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 12}px`
        }}
        onClick={handleOpenSite}
        className="relative w-full max-w-6xl h-[480px] sm:h-[520px] md:h-[550px] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden cursor-pointer group"
      >
        {/* Top Header Row (Fixed uniform height) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 w-full shrink-0 pb-3">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#BBCCD7]">
                [{project.category}]
              </span>
              <h3 className="text-lg sm:text-2xl font-medium uppercase tracking-tight text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LiveProjectButton
              label="Live Project"
              onClick={handleOpenSite}
            />
            <button
              onClick={handleOpenSite}
              className="px-4 py-2 rounded-full border border-[#D7E2EA]/40 text-xs font-bold text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-black transition-all cursor-pointer"
            >
              Open Site ↗
            </button>
          </div>
        </div>

        {/* Bottom Image Showcase Grid (Fixed uniform height across all 9 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 w-full flex-1 overflow-hidden items-stretch">
          {/* Left Column (2 Stacked Images) */}
          <div className="md:col-span-5 flex flex-col gap-3 h-full">
            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative">
              <img
                src={project.col1Img1}
                alt={`${project.name} live preview`}
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 bg-neutral-950"
                loading="lazy"
              />
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative">
              <img
                src={project.col1Img2}
                alt={`${project.name} detail`}
                className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 bg-neutral-950"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (Large Showcase Image) */}
          <div className="md:col-span-7 h-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 relative">
            <img
              src={project.col2Img}
              alt={`${project.name} showcase`}
              className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500 bg-neutral-950"
              loading="lazy"
            />
            {/* Hover Indicator */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider shadow-2xl">
                Click to Open {project.name} ↗
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 sm:px-6 md:px-10 pt-16 pb-32 select-none min-h-[750vh]"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="w-full mb-12 sm:mb-16 md:mb-20 text-center">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Cards Stack */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.num}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
