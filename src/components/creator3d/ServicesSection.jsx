import React from 'react';
import FadeIn from './FadeIn';

const SERVICES_DATA = [
  {
    num: "01",
    name: "Web Design & Development",
    tagline: "Modern websites built to represent your brand and convert visitors into customers.",
    description:
      "We design and develop clean, responsive websites for businesses, portfolios, landing pages, digital invitations, and custom web experiences with WhatsApp contact integration and SEO-friendly structure.",
    tags: ["Business Websites", "Portfolios", "Landing Pages", "Wedding Invitations", "Custom Web Apps"]
  },
  {
    num: "02",
    name: "Graphic Design & Branding",
    tagline: "Visual identities that make your brand impossible to ignore.",
    description:
      "We create bold, consistent, and memorable visuals that help businesses communicate their identity across digital and physical platforms.",
    tags: ["Brand Identity", "Logo Design", "Social Media Creatives", "Promotional Posters", "Digital Ads"]
  },
  {
    num: "03",
    name: "Video Editing & Content",
    tagline: "Turn ideas into videos people actually want to watch.",
    description:
      "We create engaging video content designed for modern digital platforms—including Reels, short-form content, brand videos, motion graphics, and event edits.",
    tags: ["Reels & Short Form", "Brand Videos", "Promotional Content", "Motion Graphics", "Event Edits"]
  },
  {
    num: "04",
    name: "AI Video Creation",
    tagline: "Next-generation visuals powered by creativity and AI.",
    description:
      "We combine state-of-the-art AI tools with creative direction to produce unique visual content, concepts, animations, and video experiences for modern brands.",
    tags: ["AI Video Concepts", "Visual Storytelling", "AI Ad Concepts", "Experimental Visuals"]
  },
  {
    num: "05",
    name: "SEO & Digital Growth",
    tagline: "Don't just build a website. Make sure people can find it.",
    description:
      "We help businesses improve their online visibility through technical SEO, search-friendly content, performance optimization, and local to global search ranking strategy.",
    tags: ["On-Page SEO", "Technical SEO", "Speed Optimization", "Local & Global Search Strategy"]
  },
  {
    num: "06",
    name: "Reho Booth AI",
    tagline: "AI-powered QR code photo booth & interactive experiential technology.",
    description:
      "An innovative AI QR code system and experiential photo booth solution for brands, events, and venues. Guests scan a QR code to generate unique, personalized AI-enhanced photos and digital keepsakes instantly.",
    tags: ["AI Photo Booth", "QR Code Instant Tech", "Event Marketing", "Interactive Brand Activation"]
  },
  {
    num: "07",
    name: "Digital Marketing Services",
    tagline: "Targeted ad campaigns designed to reach customers and generate leads.",
    description:
      "We run data-driven digital ad campaigns across Meta (Instagram & Facebook), Google Ads, and targeted social channels to maximize reach, traffic, and business growth.",
    tags: ["Meta Ad Campaigns", "Google Performance Ads", "Paid Social Growth", "Lead Generation"]
  }
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase centered leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List */}
        <div className="w-full flex flex-col divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn key={service.num} delay={index * 0.08} y={30} className="w-full">
              <div className="py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-10 md:gap-16">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.num}
                </div>

                {/* Name, Tagline & Description */}
                <div className="flex flex-col gap-3 pt-2 sm:pt-4 max-w-3xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#18011F] italic">
                    &ldquo;{service.tagline}&rdquo;
                  </p>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-75"
                    style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 text-[#0C0C0C]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
