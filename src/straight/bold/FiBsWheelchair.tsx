import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWheelchair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,3a3,3,0,1,1,3,3A3,3,0,0,1,8.5,3ZM22.016,20l-2-5H13.5a.5.5,0,0,1-.5-.5V13h6V10H13V8H10v6.5a3.5,3.5,0,0,0,2.628,3.376A5,5,0,1,1,8,11V8a8,8,0,1,0,7.737,10h2.247l2,5H24V20Z"/></svg>

);
