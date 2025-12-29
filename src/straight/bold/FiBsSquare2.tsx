import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquare2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5V24ZM3,21H21V3.5c0-.276-.225-.5-.5-.5H3.5c-.276,0-.5,.224-.5,.5V21Zm14-5h-5.28c.186-.099,.383-.202,.592-.31,1.979-1.021,4.688-2.418,4.688-5.69,0-2.757-2.243-5-5-5s-5,2.243-5,5h3c0-1.103,.897-2,2-2s2,.897,2,2c0,1.301-.981,1.95-3.064,3.024-1.753,.904-3.936,2.03-3.936,4.476v1.5h10v-3Z"/></svg>

);
