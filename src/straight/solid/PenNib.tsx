import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenNib = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.23,3.649l9.125,9.125-2.541,7.07L1.419,24l8.067-8.067c.164.044.336.067.514.067,1.105,0,2-.895,2-2s-.895-2-2-2-2,.895-2,2c0,.18.024.355.069.521L.005,22.586,4.149,6.191l7.082-2.542ZM16,.005l-2.793,2.793,8,8,2.793-2.793L16,.005Z"/></svg>

);
