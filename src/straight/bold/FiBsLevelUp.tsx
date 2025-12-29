import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLevelUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.9,7.561,14,4.665V20.5A3.5,3.5,0,0,1,10.5,24H0V21H10.5a.5.5,0,0,0,.5-.5V4.665l-2.9,2.9L5.983,5.439,10.66.763a2.6,2.6,0,0,1,3.68,0l4.678,4.676Z"/></svg>

);
