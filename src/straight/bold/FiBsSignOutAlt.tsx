import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignOutAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.117,9.879l-4.95-4.95L16.046,7.05,19.5,10.5H6.617v3H19.5l-3.45,3.45,2.121,2.121,4.95-4.95A3,3,0,0,0,23.117,9.879Z"/><path d="M9.994,20.5a.5.5,0,0,1-.5.5H3.506a.5.5,0,0,1-.5-.5V3.531a.5.5,0,0,1,.5-.5H9.494a.5.5,0,0,1,.5.5V8.345h3V3.531a3.505,3.505,0,0,0-3.5-3.5H3.506a3.505,3.505,0,0,0-3.5,3.5V20.5a3.5,3.5,0,0,0,3.5,3.5H9.494a3.5,3.5,0,0,0,3.5-3.5V15.683h-3Z"/></svg>

);
