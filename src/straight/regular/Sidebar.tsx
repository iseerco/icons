import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sidebar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3ZM2,5c0-.552,.449-1,1-1h6V20H2V5Zm20,15H11V4h10c.551,0,1,.448,1,1v15ZM4,10h3v2h-3v-2Zm0,4h3v2h-3v-2ZM7,6v2h-3v-2h3Z"/></svg>

);
