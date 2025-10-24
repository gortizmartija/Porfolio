import EmailLogo from '@/assets/icons/email.svg';
import { Button } from '@/components/common';

export function Header() {
  return (
    <header className='flex flex-col gap-1 w-vw h-dvh justify-center items-center'>
      <div>
        <h1 className='text-d1s-semibold bg-gradient-to-r from-primary-300 to-secondary-500 bg-clip-text text-transparent w-fit'>
          Gael Ortiz
        </h1>
        <h4 className='text-h4s-semibold italic px-0.5 bg-gradient-to-t from-primary-100 to-neutral-50 bg-clip-text text-transparent'>
          Desarrollador de Software
        </h4>
        <nav className='flex items-center gap-2 mt-3'>
          <Button href='' arialabel='CV' variant='outlineSM'>
            Descargar CV
          </Button>
          <Button
            href=''
            arialabel='Correo'
            variant='outlineIconSM'
            className='group'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.66671 2.66666H13.3334C14.0667 2.66666 14.6667 3.26666 14.6667 3.99999V12C14.6667 12.7333 14.0667 13.3333 13.3334 13.3333H2.66671C1.93337 13.3333 1.33337 12.7333 1.33337 12V3.99999C1.33337 3.26666 1.93337 2.66666 2.66671 2.66666Z'
                stroke='#DAABF0'
                className='group-hover:stroke-primary-300'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M14.6667 4L8.00004 8.66667L1.33337 4'
                stroke='#DAABF0'
                className='group-hover:stroke-primary-300'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
          <Button
            href=''
            arialabel='Linkedin'
            variant='outlineIconSM'
            className='group'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.00004 6H1.33337V14H4.00004V6Z'
                stroke='#DAABF0'
                className='group-hover:stroke-primary-300'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.6666 5.33331C11.7275 5.33331 12.7449 5.75474 13.4951 6.50489C14.2452 7.25503 14.6666 8.27245 14.6666 9.33331V14H12V9.33331C12 8.97969 11.8595 8.64055 11.6094 8.3905C11.3594 8.14046 11.0202 7.99998 10.6666 7.99998C10.313 7.99998 9.97387 8.14046 9.72382 8.3905C9.47377 8.64055 9.33329 8.97969 9.33329 9.33331V14H6.66663V9.33331C6.66663 8.27245 7.08805 7.25503 7.8382 6.50489C8.58834 5.75474 9.60576 5.33331 10.6666 5.33331V5.33331Z'
                stroke='#DAABF0'
                className='group-hover:stroke-primary-300'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M2.66671 4.00001C3.40309 4.00001 4.00004 3.40306 4.00004 2.66668C4.00004 1.9303 3.40309 1.33334 2.66671 1.33334C1.93033 1.33334 1.33337 1.9303 1.33337 2.66668C1.33337 3.40306 1.93033 4.00001 2.66671 4.00001Z'
                stroke='#DAABF0'
                className='group-hover:stroke-primary-300'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Button>
          <Button
            href=''
            arialabel='GitHub'
            variant='outlineIconSM'
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
          </Button>
        </nav>
      </div>
    </header>
  );
}
