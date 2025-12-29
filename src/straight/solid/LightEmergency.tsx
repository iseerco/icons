import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightEmergency = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,24H0v-1c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3v1ZM12,0C7.037,0,3,4.037,3,9v9h18v-9C21,4.037,16.963,0,12,0Zm0,7c-1.103,0-2,.897-2,2h-2c0-2.206,1.794-4,4-4v2Z"/></svg>

);
