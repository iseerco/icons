import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,6.21a1,1,0,0,0,1.41,0L11,2.58V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V2.59l3.62,3.62a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.41L14.13.88a3,3,0,0,0-4.24,0L6,4.8A1,1,0,0,0,6,6.21Z"/></svg>

);
