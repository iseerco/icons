import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownToLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,24H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Zm-8.23-5.14s6.35-6.75,6.35-6.75c.87-.87,1.12-2.11,.65-3.24-.47-1.13-1.52-1.84-2.75-1.85h-2.02s0-4.03,0-4.03c.01-1.67-1.36-3-3.02-3h-3.98c-1.66,0-3,1.34-3,3v4s-1.87,0-1.87,0c-1.17,0-2.3,.61-2.81,1.66-.57,1.18-.34,2.51,.54,3.4l6.29,6.8c.77,.77,1.79,1.16,2.81,1.16s2.03-.39,2.81-1.16Z"/></svg>

);
