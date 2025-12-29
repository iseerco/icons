import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHelicopterSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4V1H17V0H14V1H7V4h7V6H3V4H0v7.131l7.031,2.01A6.512,6.512,0,0,0,11,18.5V21H7v3H20.5A3.5,3.5,0,0,0,24,20.5V20H21v.5a.5.5,0,0,1-.5.5H19V19h.5A4.505,4.505,0,0,0,24,14.5a8.507,8.507,0,0,0-7-8.359V4ZM16,21H14V19h2Zm3.5-5h-6A3.5,3.5,0,0,1,10,12.5V10.869L3.46,9H14v5h6.975c.014.163.025.328.025.495A1.505,1.505,0,0,1,19.5,16Z"/></svg>

);
