import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShuttleVan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12.849a4.965,4.965,0,0,0-.431-2.031L20.442,3.781A3,3,0,0,0,17.7,2H3A3,3,0,0,0,0,5V19H2v.5a3.5,3.5,0,0,0,7,0V19h6v.5a3.5,3.5,0,0,0,7,0V19h2ZM18.614,4.594,21.017,10H14V4h3.7A1,1,0,0,1,18.614,4.594ZM8,10V4h4v6ZM3,4H6v6H2V5A1,1,0,0,1,3,4ZM7,19.5a1.5,1.5,0,0,1-3,0V19H7Zm13,0a1.5,1.5,0,0,1-3,0V19h3ZM22,17H2V12H21.877a2.985,2.985,0,0,1,.123.849Z"/></svg>

);
