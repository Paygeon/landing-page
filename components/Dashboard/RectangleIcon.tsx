import { memo, SVGProps } from 'react';

const RectangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1318 1226' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1318V1226H0V0Z' fill='#313131' />
  </svg>
);

const Memo = memo(RectangleIcon);
export { Memo as RectangleIcon };
