import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSunriseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.938,21a7.949,7.949,0,0,0-1.126-3.191l2.947-2.947-2.121-2.121-2.852,2.852A7.967,7.967,0,0,0,13.5,14.142V10h-3v4.142a7.967,7.967,0,0,0-3.286,1.451L4.362,12.741,2.241,14.862,5.188,17.81A7.939,7.939,0,0,0,4.062,21H0v3H24V21ZM12,17a5.009,5.009,0,0,1,4.9,4H7.1A5.009,5.009,0,0,1,12,17ZM10.5,4H7.538L11.211.327a1.115,1.115,0,0,1,1.578,0L16.462,4H13.5V8h-3Z"/></svg>

);
