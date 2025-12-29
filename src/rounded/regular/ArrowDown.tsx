import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.05,17.79a1,1,0,0,0-1.42,0L13,21.42V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V21.41L7.38,17.79A1,1,0,1,0,6,19.2l3.92,3.92a3,3,0,0,0,4.24,0l3.92-3.92A1,1,0,0,0,18.05,17.79Z"/></svg>

);
