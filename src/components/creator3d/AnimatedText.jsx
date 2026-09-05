import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function CharSpan({ char, start, end, scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = "" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const totalChars = text.length;

  return (
    <p
      ref={containerRef}
      className={`text-center font-medium leading-relaxed max-w-[560px] text-[#D7E2EA] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {text.split(' ').map((word, wIdx, wordsArr) => {
        const prevChars = wordsArr.slice(0, wIdx).join(' ').length + (wIdx > 0 ? 1 : 0);
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((char, cIdx) => {
              const charIdx = prevChars + cIdx;
              const start = charIdx / totalChars;
              const end = Math.min(1, start + (1 / totalChars));
              return (
                <CharSpan
                  key={cIdx}
                  char={char}
                  start={start}
                  end={end}
                  scrollYProgress={scrollYProgress}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

export default AnimatedText;
