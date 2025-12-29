import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShoppingBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,6A6,6,0,0,0,6,6H0V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V6ZM12,3a3,3,0,0,1,3,3H9A3,3,0,0,1,12,3Zm9,18H3V9H6v2H9V9h6v2h3V9h3Z"/></svg>

);
