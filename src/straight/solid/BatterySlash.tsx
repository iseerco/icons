import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BatterySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.757,20H0V4.243l15.757,15.757Zm5.042-.615l3.158,3.158-1.414,1.414L.042,1.457,1.457,.043l3.957,3.957h13.586c1.654,0,3,1.346,3,3v1h2v8h-2v1c0,.977-.476,1.837-1.201,2.385Z"/></svg>

);
