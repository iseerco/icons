import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitchOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,11V6h6v5h-6Zm6,2h-6v3h6v-3ZM22,3V24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3Zm-5,1H7v14c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V4Z"/></svg>

);
