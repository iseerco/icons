import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectabgleVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,0h-7A5.506,5.506,0,0,0,3,5.5v13A5.506,5.506,0,0,0,8.5,24h7A5.506,5.506,0,0,0,21,18.5V5.5A5.506,5.506,0,0,0,15.5,0ZM18,18.5A2.5,2.5,0,0,1,15.5,21h-7A2.5,2.5,0,0,1,6,18.5V5.5A2.5,2.5,0,0,1,8.5,3h7A2.5,2.5,0,0,1,18,5.5Z"/></svg>

);
