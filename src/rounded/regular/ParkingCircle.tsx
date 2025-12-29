import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ParkingCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,19c-.553,0-1-.448-1-1V9c0-2.206,1.794-4,4-4h2.5c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5h-4.5v4c0,.552-.447,1-1,1Zm1-7h4.5c1.379,0,2.5-1.122,2.5-2.5s-1.121-2.5-2.5-2.5h-2.5c-1.103,0-2,.897-2,2v3Zm3,12C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Z"/></svg>

);
