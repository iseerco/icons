import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,2H18V1.5A1.5,1.5,0,0,0,16.5,0h0A1.5,1.5,0,0,0,15,1.5V2H9V1.5A1.5,1.5,0,0,0,7.5,0h0A1.5,1.5,0,0,0,6,1.5V2H5.5A5.5,5.5,0,0,0,0,7.5v11A5.5,5.5,0,0,0,5.5,24h13A5.5,5.5,0,0,0,24,18.5V7.5A5.5,5.5,0,0,0,18.5,2Zm0,19H5.5A2.5,2.5,0,0,1,3,18.5V10H21v8.5A2.5,2.5,0,0,1,18.5,21Z"/></svg>

);
