import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckPickup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13.5A3.5,3.5,0,0,0,20.5,10h-.217L15.75,3.5A3.5,3.5,0,0,0,12.879,2H8v8H0v9H3.05a2.5,2.5,0,1,0,4.9,0h8.1a2.5,2.5,0,1,0,4.9,0H24ZM11,5h1.879a.5.5,0,0,1,.41.214L16.626,10H11ZM21,16H3V13H20.5a.5.5,0,0,1,.5.5Z"/></svg>

);
