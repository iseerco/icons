import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pallet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,20v1c0,.553-.448,1-1,1s-1-.447-1-1v-1c0-.552-.449-1-1-1h-8v2c0,.553-.448,1-1,1s-1-.447-1-1v-2H3c-.551,0-1,.448-1,1v1c0,.553-.448,1-1,1s-1-.447-1-1v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Z"/>
</svg>

);
