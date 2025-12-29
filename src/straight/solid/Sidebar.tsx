import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sidebar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,2H3C1.346,2,0,3.346,0,5V22H9V2Zm-3,14H3v-2h3v2Zm0-4H3v-2h3v2Zm-3-4v-2h3v2H3Zm21-3V22H11V2h10c1.654,0,3,1.346,3,3Z"/></svg>

);
