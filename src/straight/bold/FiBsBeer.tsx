import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBeer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5A3.5,3.5,0,0,0,20.5,8H19V4H16.329a3,3,0,0,0-4.05-1.729,3.5,3.5,0,0,0-6.435-.238A2.959,2.959,0,0,0,2.7,4H0V20.5A3.5,3.5,0,0,0,3.5,24h12A3.5,3.5,0,0,0,19,20.5V19h5Zm-8,9a.5.5,0,0,1-.5.5H3.5a.5.5,0,0,1-.5-.5V7H5v6a2,2,0,0,0,4,0V7h7ZM21,16H19V11h1.5a.5.5,0,0,1,.5.5Z"/></svg>

);
