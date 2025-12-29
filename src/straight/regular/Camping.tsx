import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Camping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12-.013.408,19.6A2.914,2.914,0,0,0,2.917,24H21.083a2.914,2.914,0,0,0,2.509-4.4ZM9,22l3-5.081L15,22Zm12.88-.461a.9.9,0,0,1-.794.461H17.326L12,12.987,6.674,22H2.917a.913.913,0,0,1-.787-1.378L12,3.919l9.87,16.7A.9.9,0,0,1,21.877,21.539Z"/></svg>

);
