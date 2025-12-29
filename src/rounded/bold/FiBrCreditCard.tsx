import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="6.5" cy="14.5" r="1.5"/><path d="M18.5,3H5.5A5.506,5.506,0,0,0,0,8.5v7A5.506,5.506,0,0,0,5.5,21h13A5.506,5.506,0,0,0,24,15.5v-7A5.506,5.506,0,0,0,18.5,3ZM5.5,6h13a2.5,2.5,0,0,1,2.449,2H3.051A2.5,2.5,0,0,1,5.5,6Zm13,12H5.5A2.5,2.5,0,0,1,3,15.5V11H21v4.5A2.5,2.5,0,0,1,18.5,18Z"/></svg>

);
