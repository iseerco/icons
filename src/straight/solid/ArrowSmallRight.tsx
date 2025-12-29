import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.414,10.586,13.121,6.293,11.707,7.707,15,11H5v2H15l-3.293,3.293,1.414,1.414,4.293-4.293A2,2,0,0,0,17.414,10.586Z"/></svg>

);
