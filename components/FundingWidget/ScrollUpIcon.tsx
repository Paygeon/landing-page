import { memo, SVGProps } from 'react';

const ScrollUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 59 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_127_125)'>
      <rect width={59} height={60} rx={5} fill='#151515' />
    </g>
    <g filter='url(#filter1_d_127_125)'>
      <path
        d='M40.3111 31.2977L29.9392 19.3446C29.8455 19.2364 29.7296 19.1497 29.5994 19.0902C29.4692 19.0308 29.3277 19 29.1846 19C29.0414 19 28.9 19.0308 28.7697 19.0902C28.6395 19.1497 28.5236 19.2364 28.4299 19.3446L18.0611 31.2977C18.0298 31.3337 18.0095 31.378 18.0026 31.4253C17.9957 31.4725 18.0026 31.5207 18.0223 31.5642C18.0421 31.6077 18.0739 31.6445 18.114 31.6704C18.1542 31.6963 18.2009 31.7101 18.2486 31.7102H20.7799C20.9236 31.7102 21.0611 31.6477 21.158 31.5383L27.9986 23.6539V41.2508C27.9986 41.3883 28.1111 41.5008 28.2486 41.5008H30.1236C30.2611 41.5008 30.3736 41.3883 30.3736 41.2508V23.6539L37.2143 31.5383C37.308 31.6477 37.4455 31.7102 37.5924 31.7102H40.1236C40.3361 31.7102 40.4518 31.4602 40.3111 31.2977Z'
        fill='#CCDDFF'
      />
      <path
        d='M40.3111 31.2977L29.9392 19.3446C29.8455 19.2364 29.7296 19.1497 29.5994 19.0902C29.4692 19.0308 29.3277 19 29.1846 19C29.0414 19 28.9 19.0308 28.7697 19.0902C28.6395 19.1497 28.5236 19.2364 28.4299 19.3446L18.0611 31.2977C18.0298 31.3337 18.0095 31.378 18.0026 31.4253C17.9957 31.4725 18.0026 31.5207 18.0223 31.5642C18.0421 31.6077 18.0739 31.6445 18.114 31.6704C18.1542 31.6963 18.2009 31.7101 18.2486 31.7102H20.7799C20.9236 31.7102 21.0611 31.6477 21.158 31.5383L27.9986 23.6539V41.2508C27.9986 41.3883 28.1111 41.5008 28.2486 41.5008H30.1236C30.2611 41.5008 30.3736 41.3883 30.3736 41.2508V23.6539L37.2143 31.5383C37.308 31.6477 37.4455 31.7102 37.5924 31.7102H40.1236C40.3361 31.7102 40.4518 31.4602 40.3111 31.2977Z'
        stroke='black'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_127_125'
        x={-4}
        y={0}
        width={67}
        height={68}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_127_125' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_127_125' result='shape' />
      </filter>
      <filter
        id='filter1_d_127_125'
        x={10.1}
        y={15.1}
        width={38.1728}
        height={38.3008}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={3.95} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_127_125' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_127_125' result='shape' />
      </filter>
    </defs>
  </svg>
);

const Memo = memo(ScrollUpIcon);
export { Memo as ScrollUpIcon };
