import DotLogo from '@/assets/icons/dot.svg';
import clsx from 'clsx';

export function Event({
  variant = 'default',
  title,
  subtitle,
  time,
  children,
}) {
  const base = 'relative mx-12 grid  md:grid-cols-5 md:gap-10 md:space-x-4]';
  const variants = {
    default:
      'pb-12 before:absolute before:left-[-35px] before:block before:h-full before:border-l-3 before:rounded-full before:border-neutral-900 before:content-[""]',
    last: '',
  };

  const classes = clsx(base, variants[variant]);

  return (
    <div className={classes}>
      <div className='relative pb-6 md:col-span-2'>
        <div className='sticky top-0'>
          <span className='text-secondary-200 flex justify-center -left-[45px] absolute rounded-full bg-darkmode-500 h-10'>
            <img src={DotLogo} alt='Dot Logo' className='size-6 pt-2' />
          </span>
          <h3 className='text-h5s-semibold italic'>{title}</h3>
          <p className='text-p1-semibold pt-2 text-secondary-200 '>
            {subtitle}
          </p>
          <time className='p-0 m-0 text-sm text-neutral-500'>{time}</time>
        </div>
      </div>
      <div className='text-p2-normal relative flex flex-col gap-2 pb-4 text-neutral-500 md:col-span-3'>
        {children}
      </div>
    </div>
  );
}
