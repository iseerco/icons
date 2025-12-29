import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiceFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H5a5.006,5.006,0,0,1-5-5V5A5.006,5.006,0,0,1,5,0H19a5.006,5.006,0,0,1,5,5V19A5.006,5.006,0,0,1,19,24ZM5,2A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3ZM6,7A1,1,0,1,0,7,6,1,1,0,0,0,6,7ZM16,7a1,1,0,1,0,1-1A1,1,0,0,0,16,7ZM6,17a1,1,0,1,0,1-1A1,1,0,0,0,6,17Zm10,0a1,1,0,1,0,1-1A1,1,0,0,0,16,17Z"/></svg>

);
