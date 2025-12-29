import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGraphicTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,3H0v7.994H3v2.012H0V21H21a3,3,0,0,0,3-3V6A3,3,0,0,0,21,3Zm0,15H7V6H21Z"/></svg>

);
