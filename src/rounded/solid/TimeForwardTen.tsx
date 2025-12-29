import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeForwardTen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 15a3 3 0 0 0 -3 3v3a3 3 0 0 0 6 0v-3a3 3 0 0 0 -3-3zm1 6a1 1 0 0 1 -2 0v-3a1 1 0 0 1 2 0z"/><path d="m13 12v-5a1 1 0 0 0 -2 0v4h-3a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z"/><path d="m23 2a1 1 0 0 0 -1 1v2.374a12 12 0 1 0 -14.364 17.808 1.015 1.015 0 0 0 .364.068 1 1 0 0 0 .364-1.932 10 10 0 1 1 12.272-14.318h-2.636a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0 -1-1z"/><path d="m15.383 15.076a1 1 0 0 0 -1.09.217l-3 3a1 1 0 0 0 1.414 1.414l1.293-1.293v4.586a1 1 0 0 0 2 0v-7a1 1 0 0 0 -.617-.924z"/></svg>
);
