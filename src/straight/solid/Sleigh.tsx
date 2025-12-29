import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sleigh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,17a5.006,5.006,0,0,0,5-5V6H18V8a1,1,0,0,1-1,1H11.685a1,1,0,0,1-.971-.757L9.851,4.787A4.993,4.993,0,0,0,5,1H0V12a5.006,5.006,0,0,0,5,5H6v4H0v2H20a4,4,0,0,0,4-4H22a2,2,0,0,1-2,2H18V17Zm-3,4H8V17h8Z"/></svg>

);
