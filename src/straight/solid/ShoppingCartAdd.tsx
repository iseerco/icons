import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShoppingCartAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/><path d="M22.813,9.583A6,6,0,0,1,12.8,3H4.242L4.2,2.648A3,3,0,0,0,1.222,0H0V2H1.222a1,1,0,0,1,.993.883L3.8,16.351A3,3,0,0,0,6.778,19H20V17H6.778a1,1,0,0,1-.993-.884L5.654,15H21.836Z"/><polygon points="21 5 19 5 19 3 17 3 17 5 15 5 15 7 17 7 17 9 19 9 19 7 21 7 21 5"/></svg>

);
