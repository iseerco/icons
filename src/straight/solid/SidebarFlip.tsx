import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SidebarFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,22H0V5c0-1.654,1.346-3,3-3H13V22ZM24,5V22H15V2h6c1.654,0,3,1.346,3,3Zm-3,9h-3v2h3v-2Zm0-4h-3v2h3v-2Zm0-4h-3v2h3v-2Z"/></svg>

);
