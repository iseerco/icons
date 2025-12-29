import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAppsDelete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><rect x="13" y="4.5" width="11" height="3"/><path d="M8,3V8H3V3H8m3-3H3A3,3,0,0,0,0,3v8H11V0Z"/><path d="M8,16v5H3V16H8m3-3H0v8a3,3,0,0,0,3,3h8V13Z"/><path d="M21,16v5H16V16h5m3-3H13V24h8a3,3,0,0,0,3-3V13Z"/></svg>

);
