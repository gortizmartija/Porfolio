import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined' && !gsap.plugins.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export function Title({ text, children }) {
  const container = useRef(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const titles = Array.from(container.current.querySelectorAll('.title'));
      if (titles.length === 0) return;

      const tl = gsap.timeline({ paused: true });
      tl.from(titles, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.15,
      });

      const trigger = ScrollTrigger.create({
        trigger: container.current,
        start: 'top 85%',
        onEnter(self) {
          tl.play();
          self.kill();
        },
      });

      return () => {
        tl.kill();
        trigger && trigger.kill && trigger.kill();
      };
    },
    { scope: container }
  );
  return (
    <div ref={container}>
      <span className='title flex gap-2'>
        {children}
        <h1 className='text-h1s-semibold bg-gradient-to-t from-primary-200 to-neutral-50 bg-clip-text text-transparent'>
          {text}
        </h1>
      </span>
    </div>
  );
}
