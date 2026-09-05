import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Code, Cpu, Compass } from 'lucide-react';

export default function CustomSolutionsPage() {
  return (
    <div className="pt-32 pb-20">
      
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[#292929] bg-[#050505]">
        <div className="container mx-auto text-center max-w-4xl space-y-6">
          <div className="badge-gold">
            <span>CUSTOM CREATIVE SOLUTIONS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F2EA] font-extrabold leading-tight">
            If It Doesn't Exist Yet, <br />
            <span className="text-gold-gradient italic font-normal">Let's Create It.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#A4A4A4] max-w-2xl mx-auto leading-relaxed">
            Have a unique vision or complex digital concept? We design and engineer tailored creative solutions built specifically around your ambitious business ideas.
          </p>

          <div className="pt-4">
            <Link to="/contact" className="btn-gold-primary py-4 px-8 text-xs font-bold">
              LET'S BUILD SOMETHING DIFFERENT →
            </Link>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#292929]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] font-bold">
              Custom Digital <span className="text-gold-gradient italic">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Special Launch Campaigns", desc: "High-impact visual systems for exclusive product or brand debuts." },
              { title: "Interactive Web Experiences", desc: "Custom interactive tools, calculators, and immersive digital web applications." },
              { title: "Bespoke Portals & Systems", desc: "Custom photo portals, client management tools, and tailored web platforms." },
              { title: "Creative Direction", desc: "End-to-end creative supervision for visual campaigns and digital products." },
              { title: "Digital Concept Prototypes", desc: "Turning complex business ideas into interactive working prototypes." },
              { title: "Custom Brand Ecosystems", desc: "Integrated digital assets engineered for long-term scalability." },
            ].map((item, idx) => (
              <div key={idx} className="ebenora-card p-6 bg-[#050505]">
                <h3 className="text-lg font-bold text-[#F5F2EA] mb-2">{item.title}</h3>
                <p className="text-xs text-[#A4A4A4] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto text-center max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl text-[#F5F2EA] font-bold">Have a Custom Project in Mind?</h2>
          <Link to="/contact" className="btn-gold-primary py-4 px-8 text-xs font-bold">
            LET'S BUILD SOMETHING DIFFERENT →
          </Link>
        </div>
      </section>

    </div>
  );
}
