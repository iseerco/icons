import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsC = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,24h-2c-5.238,0-9.5-4.262-9.5-9.5v-5C2,4.262,6.262,0,11.5,0h2c3.633,0,6.895,2.022,8.512,5.277l-.895,.445c-1.448-2.913-4.367-4.722-7.617-4.722h-2C6.813,1,3,4.813,3,9.5v5c0,4.687,3.813,8.5,8.5,8.5h2c3.193,0,6.089-1.764,7.556-4.603l.889,.459c-1.64,3.173-4.875,5.144-8.444,5.144Z"/></svg>

);
