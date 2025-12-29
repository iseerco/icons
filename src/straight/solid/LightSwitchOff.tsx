import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitchOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,13v5h-6v-5h6Zm-6-2h6v-3h-6v3ZM22,3V24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3Zm-5,3c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v14h10V6Z"/></svg>

);
