import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Utensils = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.609.812A2,2,0,0,0,15,2V24h2V19.666C21.8,14.414,24.4,8.156,18.609.812ZM12,0V9a3,3,0,0,1-3,3H8V24H6V12H5A3,3,0,0,1,2,9V0H4V9a1,1,0,0,0,1,1H6V0H8V10H9a1,1,0,0,0,1-1V0Z"/></svg>

);
