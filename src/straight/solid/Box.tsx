import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Box = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3A3,3,0,0,0,0,3V8H24V3A3,3,0,0,0,21,0Z"/><path d="M1,10V24H23V10Zm15,5H8V13h8Z"/></svg>

);
