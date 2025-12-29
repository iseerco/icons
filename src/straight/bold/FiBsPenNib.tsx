import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPenNib = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.978,8.644l-2.121-2.121-2.068,2.067-4.378-4.379,2.067-2.067L15.356.022l-2.875,2.874-8.254,2.697L.002,23.998l18.405-4.226,2.697-8.255,2.874-2.873ZM6.751,19.37l3.396-3.396c.116.016.234.025.354.025,1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5c0,.12.009.238.025.354l-3.396,3.396,2.142-9.331,6.107-1.996,5.198,5.198-1.995,6.107-9.331,2.142Z"/></svg>

);
