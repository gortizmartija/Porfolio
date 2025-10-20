import { About } from './About';
import { Projects } from './Projects';
import { Training } from './Training';
import { Technologies } from './Technologies';

export function Section() {
  return (
    <section className='mx-5 flex flex-col gap-20 xl:mx-[353px] 2xl:mx-[508px]'>
      <About />
      <Projects />
      <Training />
      <Technologies />
    </section>
  );
}
