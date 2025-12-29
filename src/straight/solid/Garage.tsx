import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Garage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.043V24H20V13a3,3,0,0,0-3-3H7a3,3,0,0,0-3,3V24H0V10.043A2.985,2.985,0,0,1,1.151,7.68l9-7.042a2.989,2.989,0,0,1,3.7,0l9,7.043A2.981,2.981,0,0,1,24,10.043ZM18,13V24H6V13a1,1,0,0,1,1-1H17A1,1,0,0,1,18,13Zm-4,7H10v2h4Z"/></svg>

);
