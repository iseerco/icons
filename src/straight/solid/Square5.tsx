import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM12,18h-4v-2h4c1.103,0,2-.897,2-2s-.897-2-2-2h-4V6h7v2h-5v2h2c2.206,0,4,1.794,4,4s-1.794,4-4,4Z"/></svg>

);
