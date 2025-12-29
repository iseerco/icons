import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCursor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.519 10.9-10.853-10.052a3.407 3.407 0 0 0 -5.666 2.552v15.1a1.5 1.5 0 0 0 2.52 1.1l3.672-3.4 2.922 6.41a2.553 2.553 0 0 0 4.549-2.321l-2.81-6.12 4.855-.681a1.5 1.5 0 0 0 .811-2.586zm-9.458.769a1.494 1.494 0 0 0 -.811.386l-3.25 3.01v-11.665a.383.383 0 0 1 .24-.371.45.45 0 0 1 .185-.043.334.334 0 0 1 .227.087l8.51 7.881z"/></svg>
);
