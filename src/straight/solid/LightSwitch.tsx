import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,13v5h-6v-5h6Zm0-2V6h-6v5h6ZM22,3V24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3Zm-5,1H7V20h10V4Z"/></svg>

);
