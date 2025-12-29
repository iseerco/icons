import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCoffee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5a3.507,3.507,0,0,0-2.236-3.264A3.507,3.507,0,0,0,18.5,0H5.5A3.507,3.507,0,0,0,2.236,2.236,3.507,3.507,0,0,0,0,5.5V8H1.616L3.681,24H20.319L22.383,8H24ZM5,3.5A.5.5,0,0,1,5.5,3h13a.5.5,0,0,1,.5.5V5H5ZM6.319,21l-.645-5h3.51c.9,3.959,4.733,3.957,5.632,0h3.51l-.645,5Zm12.394-8h-3.9c-.9-3.959-4.733-3.957-5.632,0h-3.9L4.642,8H19.359Z"/></svg>

);
