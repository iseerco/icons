import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckMoving = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13.149a5.5,5.5,0,0,0-.282-1.739L22.379,7.393A3.5,3.5,0,0,0,19.059,5H17V4.5A3.5,3.5,0,0,0,13.5,1H3.5A3.5,3.5,0,0,0,0,4.5v16A2.5,2.5,0,1,0,4.95,20h1.1a2.5,2.5,0,1,0,4.9,0h6.1a2.5,2.5,0,1,0,4.9,0H24ZM14,17H3V4.5A.5.5,0,0,1,3.5,4h10a.5.5,0,0,1,.5.5Zm5.059-9a.5.5,0,0,1,.474.342l1.339,4.016A2.515,2.515,0,0,1,21,13H17V8Z"/></svg>

);
