import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3v13H8V3c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3ZM6,8h-3c-1.657,0-3,1.343-3,3v13h16v-6H6v-10Z"/></svg>

);
