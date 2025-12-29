import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShoppingCart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/><path d="M5.654,5,5.391,2.938A3.328,3.328,0,0,0,2.087,0H0V3H2.087a.331.331,0,0,1,.326.3l1.5,11.759A3.327,3.327,0,0,0,7.217,18H20.4L23.974,5ZM18.112,15H7.217a.329.329,0,0,1-.325-.3L6.037,8h14Z"/></svg>

);
