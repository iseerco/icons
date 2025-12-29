import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blanket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5,16h14.5c2.481,0,4.5-2.019,4.5-4.5v-7c0-2.481-2.019-4.5-4.5-4.5H6C2.691,0,0,2.691,0,6v13c0,2.757,2.243,5,5,5h16c1.654,0,3-1.346,3-3s-1.346-3-3-3H5c-.552,0-1,.447-1,1s.448,1,1,1h16c.551,0,1,.448,1,1s-.449,1-1,1H5c-1.654,0-3-1.346-3-3s1.346-3,3-3ZM2,6c0-2.206,1.794-4,4-4h13.5c1.378,0,2.5,1.121,2.5,2.5v7c0,1.379-1.122,2.5-2.5,2.5H5c-1.125,0-2.164.373-3,1.002V6Z"/>
</svg>

);
