import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FieldHockey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.165,8.832l5.249-7.707a2.5,2.5,0,0,1,3.4-.753h0a2.5,2.5,0,0,1,.776,3.5L18.333,11.59Zm-1.1,1.671L7.7,18.3a1.46,1.46,0,1,1-2.486-1.533A2.5,2.5,0,1,0,.958,14.142a6.46,6.46,0,0,0,11,6.784l5.28-7.666ZM24,20.491a3.5,3.5,0,1,0-3.5,3.5A3.5,3.5,0,0,0,24,20.491Z"/></svg>

);
