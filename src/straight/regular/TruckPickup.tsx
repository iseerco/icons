import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckPickup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13a3,3,0,0,0-3-3h-.478L15.84,3.285A3,3,0,0,0,13.379,2H9v8H0v8H2v.5a3.5,3.5,0,0,0,7,0V18h6v.5a3.5,3.5,0,0,0,7,0V18h2ZM11,4h2.379a1,1,0,0,1,.82.428L18.084,10H11ZM7,18.5a1.5,1.5,0,0,1-3,0V18H7Zm13,0a1.5,1.5,0,0,1-3,0V18h3ZM22,16H2V12H21a1,1,0,0,1,1,1Z"/></svg>

);
