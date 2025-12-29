import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShoppingBagAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M18,6A6,6,0,0,0,6,6H0V21a3,3,0,0,0,3,3H14V22H3a1,1,0,0,1-1-1V8H6v2H8V8h8v2h2V8h4v6h2V6ZM8,6a4,4,0,0,1,8,0Z"/><polygon points="21 16 19 16 19 19 16 19 16 21 19 21 19 24 21 24 21 21 24 21 24 19 21 19 21 16"/></g></svg>

);
