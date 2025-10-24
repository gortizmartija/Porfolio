import { About, Projects, Training, Technologies } from '@/components/sections';

export function Section() {
  return (
    <section className='mx-5 flex flex-col gap-20 xl:mx-[253px] 2xl:mx-[508px]'>
      <About />
      <Projects />
      <Training />
      <Technologies />
    </section>
  );
}
