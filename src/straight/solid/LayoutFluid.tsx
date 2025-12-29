import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LayoutFluid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,0H3A3,3,0,0,0,0,3v8H15V0Z"/><path d="M21,0H17V11h7V3a3,3,0,0,0-3-3Z"/><path d="M7,13H0v8a3,3,0,0,0,3,3H7V13Z"/><path d="M24,13H9V24H21a3,3,0,0,0,3-3V13Z"/></svg>

);
