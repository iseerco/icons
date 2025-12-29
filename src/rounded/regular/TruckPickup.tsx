import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckPickup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.548,10.038l-4.111-5.9A5,5,0,0,0,12.335,2H12A3,3,0,0,0,9,5v5H4a4,4,0,0,0-4,4v2a2,2,0,0,0,2,2v.5a3.5,3.5,0,0,0,7,0V18h6v.5a3.5,3.5,0,0,0,7,0V18a2,2,0,0,0,2-2V14A4,4,0,0,0,20.548,10.038ZM11,5a1,1,0,0,1,1-1h.335A3,3,0,0,1,14.8,5.284L18.084,10H11ZM7,18.5a1.5,1.5,0,0,1-3,0V18H7Zm13,0a1.5,1.5,0,0,1-3,0V18h3ZM22,16H2V14a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2Z"/></svg>

);
