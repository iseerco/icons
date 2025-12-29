import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsApps = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3ZM3,3H8V8H3Z"/><path d="M21,0H13V11H24V3A3,3,0,0,0,21,0Zm0,8H16V3h5Z"/><path d="M0,21a3,3,0,0,0,3,3h8V13H0Zm3-5H8v5H3Z"/><path d="M13,24h8a3,3,0,0,0,3-3V13H13Zm3-8h5v5H16Z"/></svg>

);
