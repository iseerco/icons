import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,4H13V2h2a1,1,0,0,0,0-2H9A1,1,0,0,0,9,2h2V4H1A1,1,0,0,0,1,6H2V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V6h1A1,1,0,0,0,23,4ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V6H20Z"/></svg>

);
