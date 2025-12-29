import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngleSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M0,18.5V5.5A5.507,5.507,0,0,1,5.5,0h13A5.506,5.506,0,0,1,24,5.5v13A5.506,5.506,0,0,1,18.5,24H5.5A5.507,5.507,0,0,1,0,18.5Zm21-13A2.5,2.5,0,0,0,18.5,3H5.5A2.5,2.5,0,0,0,3,5.5v13A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5Z"/><path d="M7.992,12a3.491,3.491,0,0,1,.991-2.45l3.05-3.1a1.5,1.5,0,1,1,2.139,2.1l-3.043,3.1a.505.505,0,0,0,0,.705l3.044,3.1a1.5,1.5,0,1,1-2.139,2.1l-3.052-3.1A3.494,3.494,0,0,1,7.992,12Z"/></g></svg>

);
