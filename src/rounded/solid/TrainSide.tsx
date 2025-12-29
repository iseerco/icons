import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainSide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,22H1a1,1,0,0,1,0-2H23a1,1,0,0,1,0,2ZM12,2.094V6h8.267A13.926,13.926,0,0,0,12,2.094ZM6,2V6h4V2ZM21.949,8H0v8a1,1,0,0,0,1,1H19.99a4,4,0,0,0,3.825-5.193A14.05,14.05,0,0,0,21.949,8ZM4,6V2H1A1,1,0,0,0,0,3V6Z"/></svg>

);
