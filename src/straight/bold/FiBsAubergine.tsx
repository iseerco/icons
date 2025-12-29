import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAubergine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.86,4.193c.862-.287,1.439-.547,1.493-.571L22.111.891A15.356,15.356,0,0,1,19,1.849V0H16V1.846A15.177,15.177,0,0,1,12.919.893L11.668,3.62c.053.024.629.285,1.49.574A6.467,6.467,0,0,0,11.13,7.7C11.051,8.093,10.686,9,9,9H7.5a7.5,7.5,0,0,0,0,15C17.832,24,24,18.393,24,9A6.478,6.478,0,0,0,21.86,4.193ZM7.5,21a4.5,4.5,0,0,1,0-9H9c3.189,0,4.725-1.994,5.07-3.7A3.49,3.49,0,0,1,16,5.853V8h3V5.851A3.5,3.5,0,0,1,21,9C21,16.738,16.206,21,7.5,21Z"/></svg>

);
