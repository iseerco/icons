import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarkerTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 24a5.419 5.419 0 0 1 -3.808-1.552l-3.942-3.643a11 11 0 1 1 15.527-15.583 11 11 0 0 1 0 15.556l-3.991 3.689a5.39 5.39 0 0 1 -3.786 1.533zm0-22a9 9 0 0 0 -6.364 15.364l3.934 3.636a3.516 3.516 0 0 0 4.838.019l3.984-3.682a9 9 0 0 0 -.029-12.7 8.94 8.94 0 0 0 -6.363-2.637zm0 16a7 7 0 1 1 7-7 7.008 7.008 0 0 1 -7 7zm0-12a5 5 0 1 0 5 5 5.006 5.006 0 0 0 -5-5zm1.707 6.707a1 1 0 0 0 0-1.414l-.707-.707v-1.586a1 1 0 0 0 -2 0v2a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414 0z"/></svg>
);
