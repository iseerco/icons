import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,21.092V8.908A1.5,1.5,0,0,0,22.5,6H19.724A4.445,4.445,0,0,0,20,4.5,4.505,4.505,0,0,0,15.5,0a1.5,1.5,0,0,0,0,3,1.5,1.5,0,0,1,0,3H1.5A1.5,1.5,0,0,0,1,8.908V21.092A1.5,1.5,0,0,0,1.5,24h21a1.5,1.5,0,0,0,.5-2.908ZM4,19H16.5a1.5,1.5,0,0,0,0-3H4V14H16.5a1.5,1.5,0,0,0,0-3H4V9H20V21H4Z"/></svg>

);
