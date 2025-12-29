import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.768,10.232,13.475,5.939,11.354,8.061,13.793,10.5H5v3h8.793l-2.439,2.439,2.121,2.122,4.293-4.293A2.5,2.5,0,0,0,17.768,10.232Z"/></svg>

);
