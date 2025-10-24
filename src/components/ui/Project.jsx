import PreviewLogo from '@/assets/icons/globe.svg';
import { Button, Label } from '@/components/common';

export function Project({
  img,
  name,
  subName,
  children,
  preview = true,
  hrefPreview,
  hrefCodigo,
  technologies = [],
}) {
  return (
    <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
      <img
        src={img}
        alt='Imagen del Proyecto'
        className='rounded-[25px] md:max-w-1/2'
      />
      <div className='flex flex-col gap-3'>
        <h3 className='text-h3s-semibold'>
          <span className='text-secondary-200 italic'>{name}</span> -{subName}
        </h3>
        {technologies[0] && (
          <span className='flex gap-2 flex-wrap'>
            {technologies.map(({ logo, name, color }) => (
              <Label key={logo} logo={logo} title={name} hex={color} />
            ))}
          </span>
        )}
        <p className='text-p2-normal text-neutral-100 '>{children}</p>
        <div className='mt-1 flex gap-2'>
          {preview && (
            <Button href={hrefPreview} arialabel='Preview' variant='defaultMD'>
              <img src={PreviewLogo} alt='Preview Logo' />
              Preview
            </Button>
          )}
          <Button
            href={hrefCodigo}
            arialabel='Preview'
            variant='outlineMD'
            className='group'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_7645_65)'>
                <path
                  d='M6.00004 12.6667C2.66671 13.6667 2.66671 11 1.33337 10.6667M10.6667 14.6667V12.0867C10.6917 11.7688 10.6488 11.4492 10.5407 11.1492C10.4327 10.8492 10.262 10.5756 10.04 10.3467C12.1334 10.1133 14.3334 9.32 14.3334 5.68C14.3332 4.74922 13.9752 3.85413 13.3334 3.18C13.6373 2.36567 13.6158 1.46557 13.2734 0.666666C13.2734 0.666666 12.4867 0.433332 10.6667 1.65333C9.13871 1.23921 7.52803 1.23921 6.00004 1.65333C4.18004 0.433332 3.39337 0.666666 3.39337 0.666666C3.05096 1.46557 3.02947 2.36567 3.33337 3.18C2.68679 3.85913 2.32839 4.76231 2.33337 5.7C2.33337 9.31333 4.53337 10.1067 6.62671 10.3667C6.40737 10.5933 6.23822 10.8636 6.13025 11.1599C6.02228 11.4563 5.97791 11.772 6.00004 12.0867V14.6667'
                  stroke='#DAABF0'
                  className='group-hover:stroke-primary-300'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_7645_65'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
            Código
          </Button>
        </div>
      </div>
    </div>
  );
}
