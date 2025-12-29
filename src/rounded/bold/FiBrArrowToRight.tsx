import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,6.28v3L16.932,5.209a1.5,1.5,0,1,0-2.121,2.122L18,10.515H1.5a1.5,1.5,0,0,0,0,3H18L14.811,16.7a1.5,1.5,0,0,0,2.121,2.121L21,14.753v3a1.5,1.5,0,0,0,3,0V6.28a1.5,1.5,0,0,0-3,0Z"/></svg>

);
