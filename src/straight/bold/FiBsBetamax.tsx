import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBetamax = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,13c0,1.66-1.34,3-3,3s-3-1.34-3-3,1.34-3,3-3,3,1.34,3,3Zm2,3h6v-6h-6v6ZM24,6.5v14.5H0V6.5c0-1.93,1.57-3.5,3.5-3.5H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,11.5V8H3v10H21Z"/></svg>

);
