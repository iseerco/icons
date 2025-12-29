import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReflect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13.5H0v-3H24ZM9.671.516,9.544.43A3,3,0,0,0,5,3V9H21.008ZM8,3.012,11.992,6H8ZM9.544,23.57,21.008,15H5v6a3.012,3.012,0,0,0,3,3A3,3,0,0,0,9.544,23.57ZM11.992,18,8,20.988V18Z"/></svg>

);
