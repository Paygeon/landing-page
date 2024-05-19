import { memo, SVGProps } from 'react';

const SubtractIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 377 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.000159264 7.80801C7.13883 7.80801 12.9259 4.50246 12.9259 0.424855H364.074C364.074 4.50246 369.861 7.80801 377 7.80801L377 11.4552H0L0 7.80801C5.30878e-05 7.80801 0.000106176 7.80801 0.000159264 7.80801Z'
      fill='white'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.000159264 7.80801C7.13883 7.80801 12.9259 4.50246 12.9259 0.424855H364.074C364.074 4.50246 369.861 7.80801 377 7.80801L377 11.4552H0L0 7.80801C5.30878e-05 7.80801 0.000106176 7.80801 0.000159264 7.80801Z'
      fill='url(#paint0_linear_126_868)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_126_868'
        x1={0}
        y1={0.42482}
        x2={367.844}
        y2={0.424343}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' />
        <stop offset={1} stopColor='#ADF6AC' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(SubtractIcon);
export { Memo as SubtractIcon };
