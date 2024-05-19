import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.75 1.83334H8.24998C7.74372 1.83334 7.33331 2.24375 7.33331 2.75001V4.58334C7.33331 5.0896 7.74372 5.50001 8.24998 5.50001H13.75C14.2562 5.50001 14.6666 5.0896 14.6666 4.58334V2.75001C14.6666 2.24375 14.2562 1.83334 13.75 1.83334Z'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.33335 3.66666H5.50002C5.01379 3.66666 4.54747 3.85981 4.20366 4.20363C3.85984 4.54744 3.66669 5.01376 3.66669 5.49999V18.3333C3.66669 18.8196 3.85984 19.2859 4.20366 19.6297C4.54747 19.9735 5.01379 20.1667 5.50002 20.1667H16.5C16.9863 20.1667 17.4526 19.9735 17.7964 19.6297C18.1402 19.2859 18.3334 18.8196 18.3334 18.3333V16.5'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.6667 3.66666H16.5C16.9863 3.66666 17.4526 3.85981 17.7964 4.20363C18.1402 4.54744 18.3334 5.01376 18.3334 5.49999V9.16666'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.25 12.8333H10.0833'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.75 9.16666L10.0833 12.8333L13.75 16.5'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
