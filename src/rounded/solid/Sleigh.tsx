import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sleigh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,17a5.006,5.006,0,0,0,5-5V9a3,3,0,0,0-6,0H13.246a3,3,0,0,1-2.91-2.272L9.851,4.787A4.993,4.993,0,0,0,5,1H4A4,4,0,0,0,0,5v7a5.006,5.006,0,0,0,5,5H6v4H1a1,1,0,0,0,0,2H20a4,4,0,0,0,4-4,1,1,0,0,0-2,0,2,2,0,0,1-2,2H18V17Zm-3,4H8V17h8Z"/></svg>

);
