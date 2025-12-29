import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Picture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.293,11.121,0,19.414V24H22.586L9.707,11.121A1,1,0,0,0,8.293,11.121Z"/><path d="M11.121,9.707,24,22.586V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V16.586L6.879,9.707A3,3,0,0,1,11.121,9.707ZM18,2a4,4,0,1,1-4,4A4,4,0,0,1,18,2Z"/><circle cx="18" cy="6" r="2"/></svg>

);
