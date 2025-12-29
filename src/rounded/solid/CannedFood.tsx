import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CannedFood = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,22V8a1,1,0,0,0,0-2H18.444A4.007,4.007,0,0,0,15,0a1,1,0,0,0,0,2,2,2,0,0,1,0,4H1A1,1,0,0,0,1,8v2H18a1,1,0,0,1,0,2H1v6H18a1,1,0,0,1,0,2H1v2a1,1,0,0,0,0,2H23A1,1,0,0,0,23,22Z"/></svg>

);
