import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Map = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,22.281l-6,1.5V1.924l6-1.61ZM7,1.417,4.155.233A3,3,0,0,0,0,3V21.754l7,2Zm14.867.2L17.515.155A3.022,3.022,0,0,0,17,.036V22.273l7,1.705V4.483A3,3,0,0,0,21.867,1.612Z"/></svg>

);
