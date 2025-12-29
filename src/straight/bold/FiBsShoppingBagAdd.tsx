import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShoppingBagAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,6A6,6,0,0,0,6,6H0V21a3,3,0,0,0,3,3h9V21H3V9H6v2H9V9h6v2h3V9h3v4h3V6ZM9,6a3,3,0,0,1,6,0Z"/><polygon points="21 15 18 15 18 18 15 18 15 21 18 21 18 24 20.5 24 21 24 21 21 24 21 24 20.5 24 18 21 18 21 15"/></svg>

);
