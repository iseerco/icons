import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDisplayArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,19v2h4v3H6.5v-3h4v-2H0V5c0-1.654,1.346-3,3-3h5v3H3v11h18V5h-5v-3h5c1.654,0,3,1.346,3,3v14h-10.5ZM7.5,7l3.793,3.707c.391.39,1.024.39,1.414,0l3.793-3.707h-3V0h-3v7h-3Z"/>
</svg>

);
