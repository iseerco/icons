import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSquareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,24H19a5.006,5.006,0,0,0,5-5V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19A5.006,5.006,0,0,0,5,24ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm4.293,5.879a1,1,0,0,0,1.414,0L11,7.587,11.007,18a1,1,0,0,0,2,0L13,7.586l3.293,3.293A1,1,0,1,0,17.731,9.49l-.024-.025L14.122,5.879a3,3,0,0,0-4.243,0h0L6.293,9.465A1,1,0,0,0,6.293,10.879Z"/></svg>

);
