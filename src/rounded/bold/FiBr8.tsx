import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBr8 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.117,9.143c.86-.971,1.383-2.247,1.383-3.643,0-3.033-2.468-5.5-5.5-5.5S6.5,2.467,6.5,5.5c0,1.396,.523,2.672,1.383,3.643-2.325,1.401-3.883,3.95-3.883,6.857,0,4.411,3.589,8,8,8s8-3.589,8-8c0-2.907-1.558-5.456-3.883-6.857Zm-6.617-3.643c0-1.378,1.122-2.5,2.5-2.5s2.5,1.122,2.5,2.5-1.121,2.5-2.5,2.5-2.5-1.122-2.5-2.5Zm2.5,15.5c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Z"/></svg>

);
