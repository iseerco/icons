import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Utensils = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,0h2V9a3,3,0,0,1-3,3H8V24H6V12H5A3,3,0,0,1,2,9V0H4V9a1,1,0,0,0,1,1H6V0H8V10H9a1,1,0,0,0,1-1ZM22,9.267c0,4.677-3.877,9.191-5,10.4V24H15V2A2,2,0,0,1,18.609.812C20.155,2.887,22,6.039,22,9.267Zm-5,7.26c3.9-5.028,3.92-9.477,0-14.52Z"/></svg>

);
