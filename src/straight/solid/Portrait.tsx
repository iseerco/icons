import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Portrait = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,16H7a1,1,0,0,0-1,1v7H18V17A1,1,0,0,0,17,16Z"/><circle cx="12" cy="7" r="3"/><path d="M21,0H3A3,3,0,0,0,0,3V24H4V17a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3v7h4V3A3,3,0,0,0,21,0ZM12,12a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,12Z"/></svg>

);
