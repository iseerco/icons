import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShoppingBagAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,19a6,6,0,0,1,10-4.472V6H18A6,6,0,0,0,6,6H0V21a3,3,0,0,0,3,3H16.683A5.994,5.994,0,0,1,14,19ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2Z"/><polygon points="23 18 21 18 21 16 19 16 19 18 17 18 17 20 19 20 19 22 21 22 21 20 23 20 23 18"/></svg>

);
