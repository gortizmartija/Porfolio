import { Logo } from './Logo';

export function TechBox({ text, hex, logo }) {
  const styles = {
    borderColor: hex,
    backgroundImage: `linear-gradient(to bottom right, rgb(23 23 23), ${hex}80)`,
  };

  return (
    <div
      style={styles}
      className='h-[60px] lg:h-[80px] min-w-fit w-full flex items-center gap-2 lg:gap-3 border-2 rounded-5 p-3 hover:scale-103 transition-transform:'
    >
      <Logo
        src={logo}
        size='sm'
        className='lg:w-12 lg:h-12'
        alt={`${text} Logo`}
      />
      <p className='text-sm lg:text-xl font-semibold'>{text}</p>
    </div>
  );
}
