import { memo, SVGProps } from 'react';

const FrameIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.75 1.83331H8.24998C7.74372 1.83331 7.33331 2.24372 7.33331 2.74998V4.58331C7.33331 5.08957 7.74372 5.49998 8.24998 5.49998H13.75C14.2562 5.49998 14.6666 5.08957 14.6666 4.58331V2.74998C14.6666 2.24372 14.2562 1.83331 13.75 1.83331Z'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.33335 3.66669H5.50002C5.01379 3.66669 4.54747 3.85984 4.20366 4.20366C3.85984 4.54747 3.66669 5.01379 3.66669 5.50002V18.3334C3.66669 18.8196 3.85984 19.2859 4.20366 19.6297C4.54747 19.9735 5.01379 20.1667 5.50002 20.1667H16.5C16.9863 20.1667 17.4526 19.9735 17.7964 19.6297C18.1402 19.2859 18.3334 18.8196 18.3334 18.3334V16.5'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.6667 3.66669H16.5C16.9863 3.66669 17.4526 3.85984 17.7964 4.20366C18.1402 4.54747 18.3334 5.01379 18.3334 5.50002V9.16669'
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
      d='M13.75 9.16669L10.0833 12.8334L13.75 16.5'
      stroke='black'
      strokeWidth={1.83333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FrameIcon2);
export { Memo as FrameIcon2 };
