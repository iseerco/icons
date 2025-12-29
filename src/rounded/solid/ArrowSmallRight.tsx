import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.061,9.525,13.475,5.939a1.5,1.5,0,0,0-2.121,2.122L13.793,10.5H5a1.5,1.5,0,0,0,0,3h8.793l-2.439,2.439a1.5,1.5,0,0,0,2.121,2.122l3.586-3.586A3.505,3.505,0,0,0,17.061,9.525Z"/></svg>

);
