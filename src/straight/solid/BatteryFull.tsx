import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatteryFull = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,16H4V8h13v8Zm7-8v8h-2v1c0,1.654-1.346,3-3,3H0V4H19c1.654,0,3,1.346,3,3v1h2Zm-5-2H2v12H19V6Z"/></svg>

);
