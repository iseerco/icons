import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blanket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,16h19V0H6C2.691,0,0,2.691,0,6v13c0,2.757,2.243,5,5,5h16c1.654,0,3-1.346,3-3s-1.346-3-3-3H5v2h16c.551,0,1,.448,1,1s-.449,1-1,1H5c-1.654,0-3-1.346-3-3s1.346-3,3-3ZM2,6c0-2.206,1.794-4,4-4h16v12H5c-1.125,0-2.164.373-3,1.002V6Z"/>
</svg>

);
