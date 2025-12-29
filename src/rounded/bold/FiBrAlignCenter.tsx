import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAlignCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.5,6h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z"/><path d="M5.5,8a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z"/><path d="M18.5,18H5.5a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z"/><path d="M22.5,13H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z"/></svg>

);
