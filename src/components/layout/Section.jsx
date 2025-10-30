import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { About, Projects, Training, Technologies } from '@/components/sections';

gsap.registerPlugin(ScrollTrigger);

export function Section() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animaciones para cada sección
      const sections = gsap.utils.toArray('.fade-section');

      sections.forEach((sec, index) => {
        let animConfig = {};

        switch (index) {
          case 0: // About
            animConfig = { y: 50, opacity: 0 };
            break;
          case 1: // Projects
            animConfig = { x: -100, opacity: 0 };
            break;
          case 2: // Training
            animConfig = { x: 100, opacity: 0 };
            break;
          case 3: // Technologies
            animConfig = { scale: 0.9, opacity: 0 };
            break;
          default:
            animConfig = { y: 50, opacity: 0 };
        }

        gsap.fromTo(sec, animConfig, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className='mx-5 mt-15 flex flex-col gap-20 xl:mx-[253px] 2xl:mx-[508px]'
    >
      <div className='fade-section'>
        <About />
      </div>

      <div className='fade-section'>
        <Projects />
      </div>

      <div className='fade-section'>
        <Training />
      </div>

      <div className='fade-section'>
        <Technologies />
      </div>
    </section>
  );
}
