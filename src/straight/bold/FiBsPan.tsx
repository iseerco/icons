import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,0A9.979,9.979,0,0,0,5.448,15.156L.015,20.605,3.41,24l5.434-5.448A9.994,9.994,0,1,0,14,0Zm0,17a7,7,0,1,1,7-7A7.009,7.009,0,0,1,14,17Zm2-7h3a5,5,0,1,1-5-5V8a2,2,0,1,0,2,2Z"/></svg>

);
