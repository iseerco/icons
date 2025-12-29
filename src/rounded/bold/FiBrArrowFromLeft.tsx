import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.141,9.941,18.409,5.209a1.5,1.5,0,0,0-2.121,2.122l3.249,3.184H3V6.28a1.5,1.5,0,0,0-3,0V17.75a1.5,1.5,0,0,0,3,0V13.515H19.473L16.288,16.7a1.5,1.5,0,1,0,2.121,2.121l4.733-4.732A2.938,2.938,0,0,0,23.141,9.941Z"/></svg>

);
