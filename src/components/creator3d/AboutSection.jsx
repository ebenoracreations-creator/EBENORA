import React from 'react';
import FadeIn from './FadeIn';

export function AboutSection({ onContactClick }) {
  const aboutText =
    "Ebenora Creations is a creative design & digital studio building bold brands and digital experiences that stand out. From visual identities to modern websites, video content, AI-powered visuals, and SEO solutions, we bring creativity and technology together to help businesses grow.";

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#0C0C0C] relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Decorative 3D Images in 4 Corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none opacity-60 md:opacity-100">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decor"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none opacity-60 md:opacity-100">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Object Decor"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none opacity-60 md:opacity-100">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decor"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none opacity-60 md:opacity-100">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decor"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Content Stack */}
      <div className="z-10 flex flex-col items-center max-w-5xl w-full text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full mb-8 sm:mb-12">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        {/* Fully Visible Clean Paragraph */}
        <FadeIn delay={0.15} y={30} className="mb-12 sm:mb-16 flex justify-center w-full max-w-3xl">
          <p className="text-center font-medium leading-relaxed text-[#D7E2EA] text-base sm:text-xl">
            {aboutText}
          </p>
        </FadeIn>

        {/* Mission & Why Ebenora Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-12 sm:mb-16 text-left">
          <FadeIn delay={0.25} y={30}>
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col gap-3 h-full">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#BBCCD7]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/80">
                To help businesses transform their ideas into memorable brands and powerful digital experiences through creative design, modern technology, and strategic thinking.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35} y={30}>
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-neutral-800 flex flex-col gap-3 h-full">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#BBCCD7]">
                Why Ebenora?
              </h3>
              <p className="text-sm sm:text-base font-light leading-relaxed text-[#D7E2EA]/80">
                We combine creativity, technology, strategy, and attention to detail to create work that doesn&apos;t simply exist online—it helps your brand get noticed.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
