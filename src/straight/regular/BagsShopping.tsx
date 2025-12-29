import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BagsShopping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,10V4h-5.051c-.252-2.244-2.139-4-4.449-4S5.303,1.756,5.051,4H0v12c0,1.654,1.346,3,3,3h3v2c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V10h-5ZM9.5,2c1.207,0,2.217,.86,2.449,2H7.051c.232-1.14,1.242-2,2.449-2ZM3,17c-.551,0-1-.448-1-1V6h3v2h2v-2h5v2h2v-2h3v4H6v7H3Zm19,4c0,.552-.449,1-1,1H9c-.551,0-1-.448-1-1V12h14v9Zm-11-5v-2h2v2c0,1.103,.897,2,2,2s2-.897,2-2v-2h2v2c0,2.206-1.794,4-4,4s-4-1.794-4-4Z"/></svg>

);
