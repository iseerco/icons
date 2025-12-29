import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AppsDelete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3Z"/><path d="M0,21a3,3,0,0,0,3,3h8V13H0Z"/><path d="M13,13V24h8a3,3,0,0,0,3-3V13Z"/><rect x="13" y="5" width="10" height="2"/></svg>

);
