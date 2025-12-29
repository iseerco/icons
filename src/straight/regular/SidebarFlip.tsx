import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SidebarFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3ZM2,5c0-.552,.449-1,1-1H13V20H2V5Zm20,15h-7V4h6c.551,0,1,.448,1,1v15Zm-5-10h3v2h-3v-2Zm0,4h3v2h-3v-2Zm0-8h3v2h-3v-2Z"/></svg>

);
