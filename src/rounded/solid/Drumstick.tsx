import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Drumstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2.5a8.578,8.578,0,0,0-12.075,0c-2.377,2.377-3.157,7.909-3.41,11A4.164,4.164,0,0,0,6.6,15.983l-3.8,3.8a1.5,1.5,0,1,0-.649,2.063,1.5,1.5,0,1,0,2.063-.649l3.8-3.8a4.136,4.136,0,0,0,2.484.592c3.086-.253,8.617-1.032,11-3.41A8.577,8.577,0,0,0,21.5,2.5Z"/></svg>

);
