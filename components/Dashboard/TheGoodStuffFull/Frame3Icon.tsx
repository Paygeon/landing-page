import { memo, SVGProps } from 'react';

const Frame3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 55 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={55} height={52} rx={8} fill='white' />
    <path
      d='M38 12.2353H16.6667C15.2 12.2353 14.0133 13.4588 14.0133 14.9542L14 39.4248L19.3333 33.9869H38C39.4667 33.9869 40.6667 32.7634 40.6667 31.268V14.9542C40.6667 13.4588 39.4667 12.2353 38 12.2353ZM28.6667 28.549H26V25.8301H28.6667V28.549ZM28.6667 23.1111H26V17.6732H28.6667V23.1111Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(Frame3Icon);
export { Memo as Frame3Icon };
