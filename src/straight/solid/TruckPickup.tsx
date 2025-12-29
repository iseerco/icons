import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckPickup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18H0V11H21a3,3,0,0,1,3,3ZM6.942,20c.587,3.954-5.472,3.952-4.884,0Zm10.116,0c-.587,3.954,5.472,3.952,4.884,0ZM19.824,9,15.84,3.285A3,3,0,0,0,13.379,2H9V9Z"/></svg>

);
