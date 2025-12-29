import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FlipHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.207.068H10.2A1,1,0,0,0,9.07.628L.375,19.759A3,3,0,0,0,3.106,24H10a1,1,0,0,0,1-1V1.046A1.01,1.01,0,0,0,10.207.068ZM9,22H3.106a1,1,0,0,1-.911-1.414L9,5.616Z"/><path d="M23.625,19.759,14.93.628A1.022,1.022,0,0,0,13.778.071,1,1,0,0,0,13,1.046V23a1,1,0,0,0,1,1h6.894a3,3,0,0,0,2.731-4.241Z"/></svg>

);
