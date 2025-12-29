import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowsH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.414,10.586,20.172,7.343,18.758,8.757,21,11H3L5.243,8.757,3.829,7.343.586,10.586a2,2,0,0,0,0,2.828l3.243,3.243,1.414-1.414L3,13H21l-2.242,2.243,1.414,1.414,3.242-3.243A2,2,0,0,0,23.414,10.586Z"/></svg>

);
