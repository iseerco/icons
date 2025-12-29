import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAppsAdd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="20 4 20 0 17 0 17 4 13 4 13 7 17 7 17 11 20 11 20 7 24 7 24 4 20 4"/><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3ZM3,3H8V8H3Z"/><path d="M0,21a3,3,0,0,0,3,3h8V13H0Zm3-5H8v5H3Z"/><path d="M13,24h8a3,3,0,0,0,3-3V13H13Zm3-8h5v5H16Z"/></svg>

);
