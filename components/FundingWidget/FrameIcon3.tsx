import { memo, SVGProps } from 'react';

const FrameIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.75 1.83337H8.24998C7.74372 1.83337 7.33331 2.24378 7.33331 2.75004V4.58337C7.33331 5.08964 7.74372 5.50004 8.24998 5.50004H13.75C14.2562 5.50004 14.6666 5.08964 14.6666 4.58337V2.75004C14.6666 2.24378 14.2562 1.83337 13.75 1.83337Z'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.33335 3.66663H5.50002C5.01379 3.66663 4.54747 3.85978 4.20366 4.2036C3.85984 4.54741 3.66669 5.01373 3.66669 5.49996V18.3333C3.66669 18.8195 3.85984 19.2858 4.20366 19.6297C4.54747 19.9735 5.01379 20.1666 5.50002 20.1666H16.5C16.9863 20.1666 17.4526 19.9735 17.7964 19.6297C18.1402 19.2858 18.3334 18.8195 18.3334 18.3333V16.5'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.6667 3.66663H16.5C16.9863 3.66663 17.4526 3.85978 17.7964 4.2036C18.1402 4.54741 18.3334 5.01373 18.3334 5.49996V9.16663'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.25 12.8334H10.0833'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.75 9.16663L10.0833 12.8333L13.75 16.5'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FrameIcon3);
export { Memo as FrameIcon3 };
