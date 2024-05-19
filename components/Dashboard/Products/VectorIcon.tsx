import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.5 11.5909V4.77276M10.9091 7.50003L7.5 4.09094L4.09091 7.50003M7.5 15C11.6421 15 15 11.6422 15 7.50003C15 3.3579 11.6421 3.38554e-05 7.5 3.38554e-05C3.35786 3.38554e-05 0 3.3579 0 7.50003C0 11.6422 3.35786 15 7.5 15Z'
      stroke='#FBE67B'
      strokeWidth={1.3}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
