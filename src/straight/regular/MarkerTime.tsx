import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarkerTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 23.994-7.063-6.909a10 10 0 1 1 14.134-14.149 10.011 10.011 0 0 1 0 14.142zm0-21.988a8 8 0 0 0 -5.657 13.658l5.657 5.536 5.665-5.54a8 8 0 0 0 -5.665-13.654zm0 13.994a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0 -4-4zm2.207 4.793-1.207-1.207v-2.586h-2v3.414l1.793 1.793z"/></svg>
);
