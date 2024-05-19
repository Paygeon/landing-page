import { memo, SVGProps } from 'react';

const TopSectionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 377 138' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 18.6543C0 8.7132 8.05887 0.654327 18 0.654327H359C368.941 0.654327 377 8.7132 377 18.6543L377 114.981C369.861 114.981 364.074 119.103 364.074 124.189C364.074 129.274 369.861 133.396 377 133.396L377 138H0V133.396C7.13864 133.396 12.9256 129.274 12.9256 124.189C12.9256 119.103 7.13864 114.981 0 114.981V18.6543Z'
      fill='url(#paint0_linear_126_770)'
    />
    <defs>
      <linearGradient id='paint0_linear_126_770' x1={0} y1={138} x2={377} y2={138} gradientUnits='userSpaceOnUse'>
        <stop stopColor='white' />
        <stop offset={1} stopColor='#F6EFAC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(TopSectionIcon);
export { Memo as TopSectionIcon };
