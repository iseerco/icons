import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowsH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.008,9.566l-3.048-3.1a1.5,1.5,0,0,0-2.141,2.1l1.9,1.933H4.264L6.18,8.551a1.5,1.5,0,1,0-2.14-2.1L.991,9.55A3.5,3.5,0,0,0,0,12v0H0a3.489,3.489,0,0,0,.99,2.448c.2.205.383.391.505.512L4.04,17.551a1.5,1.5,0,1,0,2.14-2.1L4.265,13.5H19.75l-1.931,1.964a1.5,1.5,0,0,0,2.141,2.1l3.047-3.1A3.52,3.52,0,0,0,23.008,9.566Z"/></svg>

);
