import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlayingCards = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.585 4.41a3.334 3.334 0 0 0 -1.994-1.61l-8.81-2.665a3.366 3.366 0 0 0 -4.17 2.278l-.477 1.587h-4.634a3.5 3.5 0 0 0 -3.5 3.5v16.5h16v-2.333l3.234 1.2 4.63-15.9a3.338 3.338 0 0 0 -.279-2.557zm-10.585 16.59h-10v-13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5zm7.984-14.868-3.728 12.8-1.256-.465v-10.967a3.5 3.5 0 0 0 -3.5-3.5h-1.233l.221-.736a.365.365 0 0 1 .175-.219.345.345 0 0 1 .264-.034l8.809 2.666a.363.363 0 0 1 .219.176.353.353 0 0 1 .029.279zm-8.984 6.868c0 2.333-4 5-4 5s-4-2.667-4-5a2 2 0 0 1 4 0 2 2 0 0 1 4 0z"/></svg>
);
