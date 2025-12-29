import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngleSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M18.5,24H5.5A5.507,5.507,0,0,1,0,18.5V5.5A5.506,5.506,0,0,1,5.5,0h13A5.506,5.506,0,0,1,24,5.5v13A5.507,5.507,0,0,1,18.5,24ZM5.5,3A2.5,2.5,0,0,0,3,5.5v13A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5V5.5A2.5,2.5,0,0,0,18.5,3Z"/><path d="M12,16.008a3.491,3.491,0,0,1-2.45-.991l-3.1-3.05a1.5,1.5,0,1,1,2.1-2.139l3.1,3.043a.505.505,0,0,0,.705,0l3.1-3.044a1.5,1.5,0,1,1,2.1,2.139l-3.1,3.052A3.494,3.494,0,0,1,12,16.008Z"/></g></svg>

);
