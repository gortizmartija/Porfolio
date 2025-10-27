import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

export function Blobs() {
  const container = useRef(null);

  useGSAP(
    () => {
      const blobs = gsap.utils.toArray('.blob');

      // Animación de aparición
      gsap.from(blobs, {
        delay: 1,
        width: 0,
        height: 0,
        duration: 1.5,
        ease: 'power4.out',
      });

      blobs.forEach((blob, i) => {
        const b1 = blob.querySelector('.b1');
        const b2 = blob.querySelector('.b2');

        // Morphing SVG
        if (b1 && b2) {
          gsap.to(b1, {
            morphSVG: b2,
            duration: 12 + i * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }

        // Movimiento sutil aleatorio
        const randomX = gsap.utils.random(-10, 10); // px
        const randomY = gsap.utils.random(-10, 10); // px
        const randomDuration = gsap.utils.random(12, 24); // segundos
        const randomDelay = gsap.utils.random(0, 5); // asincronía

        gsap.to(blob, {
          x: `+=${randomX}`,
          y: `+=${randomY}`,
          duration: randomDuration,
          delay: randomDelay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    },
    { scope: container }
  );

  return (
    <div className='overflow-hidden absolute -z-10 w-full h-full'>
      <div className='absolute inset-16 bg-[radial-gradient(closest-side,#2D0B3C70,#0E050A00)] bg-center'></div>
      <div className='absolute inset-0 -z-20 bg-[radial-gradient(at_top_right,#1C004F70,#0E050A00)] bg-center'></div>
      <div className='absolute inset-0 -z-20 bg-[radial-gradient(at_top_left,#0D022470,#0E050A00)] bg-center'></div>

      <svg xmlns='http://www.w3.org/2000/svg' className='absolute'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div
        className='gradient-container overflow-hidden w-full h-full'
        ref={container}
      >
        <svg
          id='visual'
          className='blob absolute -bottom-100 -left-80'
          viewBox='0 0 900 600'
          width='900'
          height='600'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
        >
          <defs>
            <linearGradient id='grad1' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#6B0AD3' />
              <stop offset='50%' stopColor='#BB3691' />
              <stop offset='100%' stopColor='#F48E20' />
            </linearGradient>
          </defs>

          <g transform='translate(462.92633081213546 318.74724394301177)'>
            <path
              fill='url(#grad1)'
              className='b1'
              d='M140.3 -163.6C166.9 -113.6 163.5 -56.8 152.7 -10.7C142 35.4 124 70.7 97.4 109.7C70.7 148.7 35.4 191.4 -17.1 208.4C-69.5 225.5 -139.1 217.1 -168.1 178.1C-197.1 139.1 -185.5 69.5 -176.6 9C-167.6 -51.6 -161.2 -103.2 -132.2 -153.2C-103.2 -203.2 -51.6 -251.6 2.6 -254.2C56.8 -256.8 113.6 -213.6 140.3 -163.6'
            />
          </g>
          <g transform='translate(471.6279727575952 277.78064168756003)'>
            <path
              className='b2 hidden'
              d='M90.6 -134.5C127.1 -117.5 173.2 -108.8 189.4 -83.5C205.5 -58.2 191.9 -16.3 193.1 33.1C194.4 82.6 210.5 139.5 193 176.7C175.5 213.8 124.2 231.2 78.6 225C33.1 218.8 -6.9 189 -49.2 173.8C-91.6 158.6 -136.5 157.9 -168.3 137C-200.1 116.2 -218.8 75.2 -232 29.2C-245.1 -16.8 -252.6 -67.8 -229.3 -98.9C-206.1 -130 -152 -141.1 -108.6 -155C-65.2 -168.8 -32.6 -185.4 -2.8 -181.1C27 -176.7 54.1 -151.5 90.6 -134.5'
              fill='#BB004B'
            />
          </g>
        </svg>
        <svg
          id='visual'
          className='blob absolute -top-10 -right-100'
          viewBox='0 0 900 600'
          width='900'
          height='600'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
        >
          <defs>
            <linearGradient id='grad2' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#6B0AD3' />
              <stop offset='50%' stopColor='#BB3691' />
              <stop offset='100%' stopColor='#F48E20' />
            </linearGradient>
          </defs>
          <g transform='translate(430.9501777442537 304.6592725502079)'>
            <path
              fill='url(#grad2)'
              className='b1'
              d='M89.1 -77.6C114.1 -64.1 132.1 -32.1 124.9 -7.2C117.7 17.7 85.4 35.4 60.4 49.2C35.4 63 17.7 73 -3.1 76.1C-23.8 79.1 -47.6 75.3 -63.8 61.4C-79.9 47.6 -88.5 23.8 -88.4 0.1C-88.2 -23.6 -79.5 -47.1 -63.3 -60.6C-47.1 -74.1 -23.6 -77.6 4.2 -81.8C32.1 -86.1 64.1 -91.1 89.1 -77.6'
            ></path>
          </g>
          <g transform='translate(449.33424738118254 289.16392149188874)'>
            <path
              className='b2 hidden'
              d='M64.1 -74.3C87.9 -71 115.3 -58.7 120.7 -39.7C126.2 -20.8 109.7 4.7 93.4 22.7C77 40.7 60.8 51.1 45.3 64.7C29.8 78.3 14.9 95.2 -1.2 96.8C-17.2 98.4 -34.5 84.8 -56.7 73.3C-78.9 61.9 -106 52.6 -115.9 34.7C-125.9 16.8 -118.6 -9.7 -101.9 -24.5C-85.2 -39.3 -59.1 -42.4 -40.6 -47.4C-22 -52.3 -11 -59.2 4.6 -65.5C20.2 -71.8 40.4 -77.6 64.1 -74.3'
              fill='#BB004B'
            ></path>
          </g>
        </svg>
        <svg
          id='visual'
          className='blob absolute -top-50 -left-100'
          viewBox='0 0 900 600'
          width='900'
          height='600'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
        >
          <defs>
            <linearGradient id='grad3' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#6B0AD3' />
              <stop offset='50%' stopColor='#BB3691' />
              <stop offset='100%' stopColor='#F48E20' />
            </linearGradient>
          </defs>
          <g transform='translate(450.0258469228283 299.8211373237223)'>
            <path
              className='b1'
              d='M32.5 -56.9C43 -37.1 52.9 -28.8 69.1 -14.1C85.3 0.5 107.8 21.4 111.5 44.4C115.3 67.3 100.3 92.3 78.5 104.3C56.8 116.2 28.4 115.1 -0.5 115.8C-29.4 116.5 -58.8 118.9 -68 102.9C-77.2 86.9 -66.2 52.4 -74.6 24.7C-83.1 -3.1 -111 -24.1 -112.1 -41.4C-113.3 -58.7 -87.8 -72.2 -64.7 -87.9C-41.5 -103.5 -20.8 -121.3 -4.9 -114.5C11 -107.8 22 -76.7 32.5 -56.9'
              fill='url(#grad3)'
            ></path>
          </g>
          <g transform='translate(468.432205967868 290.4684848203726)'>
            <path
              className='b2 hidden'
              d='M54.9 -71.1C69.5 -65 78.5 -46.7 83 -28.1C87.5 -9.5 87.5 9.5 86.7 33.2C86 57 84.4 85.5 69.8 90.2C55.3 94.8 27.6 75.5 0.1 75.4C-27.4 75.3 -54.9 94.3 -78.6 92.6C-102.4 91 -122.5 68.7 -123.9 44.9C-125.2 21.1 -107.8 -4.1 -90.2 -20.3C-72.6 -36.6 -54.8 -43.8 -39.7 -49.7C-24.7 -55.6 -12.3 -60.3 3.9 -65.7C20.2 -71.1 40.4 -77.2 54.9 -71.1'
              fill='#BB004B'
            ></path>
          </g>
        </svg>
        <svg
          id='10015.io'
          className='blob absolute bottom-25 right-0 w-50 h-50 fill-current'
          viewBox='0 0 480 480'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <defs>
            <linearGradient id='grad3' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#F48E20' />

              <stop offset='50%' stopColor='#BB3691' />
              <stop offset='100%' stopColor='#6B0AD3' />
            </linearGradient>
          </defs>
          <path
            className='b1'
            fill='url(#grad3)'
            d='M307.5,279.5Q285,319,225,344Q165,369,126,304.5Q87,240,109.5,146.5Q132,53,200.5,121Q269,189,299.5,214.5Q330,240,307.5,279.5Z'
          />
          <path
            className='b2 hidden'
            fill='url(#grad3)'
            d='M366,282.5Q289,325,217.5,364Q146,403,110,321.5Q74,240,139.5,209.5Q205,179,254.5,153.5Q304,128,373.5,184Q443,240,366,282.5Z'
          />
        </svg>
        <svg
          id='visual'
          className='blob absolute bottom-40 -left-10 w-70 h-70 fill-current'
          viewBox='0 0 900 600'
          width='900'
          height='600'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          version='1.1'
        >
          <defs>
            <linearGradient id='grad5' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#F48E20' />
              <stop offset='50%' stopColor='#BB3691' />
              <stop offset='100%' stopColor='#6B0AD3' />
            </linearGradient>
          </defs>
          <g transform='translate(468.432205967868 290.4684848203726)'>
            <path
              fill='url(#grad5)'
              className='b1'
              d='M54.9 -71.1C69.5 -65 78.5 -46.7 83 -28.1C87.5 -9.5 87.5 9.5 86.7 33.2C86 57 84.4 85.5 69.8 90.2C55.3 94.8 27.6 75.5 0.1 75.4C-27.4 75.3 -54.9 94.3 -78.6 92.6C-102.4 91 -122.5 68.7 -123.9 44.9C-125.2 21.1 -107.8 -4.1 -90.2 -20.3C-72.6 -36.6 -54.8 -43.8 -39.7 -49.7C-24.7 -55.6 -12.3 -60.3 3.9 -65.7C20.2 -71.1 40.4 -77.2 54.9 -71.1'
            ></path>
          </g>
          <g transform='translate(450.0258469228283 299.8211373237223)'>
            <path
              className='b2 hidden'
              d='M32.5 -56.9C43 -37.1 52.9 -28.8 69.1 -14.1C85.3 0.5 107.8 21.4 111.5 44.4C115.3 67.3 100.3 92.3 78.5 104.3C56.8 116.2 28.4 115.1 -0.5 115.8C-29.4 116.5 -58.8 118.9 -68 102.9C-77.2 86.9 -66.2 52.4 -74.6 24.7C-83.1 -3.1 -111 -24.1 -112.1 -41.4C-113.3 -58.7 -87.8 -72.2 -64.7 -87.9C-41.5 -103.5 -20.8 -121.3 -4.9 -114.5C11 -107.8 22 -76.7 32.5 -56.9'
            ></path>
          </g>
        </svg>
        <svg
          id='10015.io'
          className='blob absolute -top-10 right-10 w-40 h-40 fill-current'
          viewBox='0 0 480 480'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
        >
          <defs>
            <linearGradient id='grad6' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#6B0AD3' />
              <stop offset='50%' stopColor='#BB3691' />
              <stop offset='100%' stopColor='#F48E20' />
            </linearGradient>
          </defs>
          <path
            className='b2 hidden'
            fill='url(#grad3)'
            d='M307.5,279.5Q285,319,225,344Q165,369,126,304.5Q87,240,109.5,146.5Q132,53,200.5,121Q269,189,299.5,214.5Q330,240,307.5,279.5Z'
          />
          <path
            className='b1'
            fill='url(#grad6)'
            d='M366,282.5Q289,325,217.5,364Q146,403,110,321.5Q74,240,139.5,209.5Q205,179,254.5,153.5Q304,128,373.5,184Q443,240,366,282.5Z'
          />
        </svg>
      </div>
      <svg
        className='absolute bottom-0 h-50'
        viewBox='0 0 192000 302'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect className='w-full h-full' fill='url(#paint0_linear_7604_35)' />
        <defs>
          <linearGradient
            id='paint0_linear_7604_35'
            x1='960.5'
            y1='0'
            x2='960.5'
            y2='302'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#0E050A' stopOpacity='0' />
            <stop offset='1' stopColor='#0E050A' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
