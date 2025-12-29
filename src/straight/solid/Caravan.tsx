import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Caravan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,8h3V21H14ZM8,8H5v2H8ZM24,19v2H19V6H12V17.344C8.888,12.789,1.468,15.433,2.025,21H0V3A3,3,0,0,1,3,0H19a3,3,0,0,1,3,3V19ZM10,6H3v6h7ZM7.5,17a3.5,3.5,0,0,0,0,7A3.5,3.5,0,0,0,7.5,17Z"/></svg>

);
