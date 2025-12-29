import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Expand = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H16V22h5a1,1,0,0,0,1-1V16h2v5A3,3,0,0,1,21,24Z"/><path d="M2,8H0V3A3,3,0,0,1,3,0H8V2H3A1,1,0,0,0,2,3Z"/><path d="M8,24H3a3,3,0,0,1-3-3V16H2v5a1,1,0,0,0,1,1H8Z"/><path d="M24,8H22V3a1,1,0,0,0-1-1H16V0h5a3,3,0,0,1,3,3Z"/></svg>

);
