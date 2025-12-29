import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DollyFlatbed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,8h-2V3h2v5Zm7-2v10H7V6c0-1.654,1.346-3,3-3h2v7h6V3h2c1.654,0,3,1.346,3,3Zm1,12H6c-.551,0-1-.448-1-1V3C5,1.346,3.654,0,2,0H0V2h2c.551,0,1,.448,1,1v14c0,1.654,1.346,3,3,3v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h5v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h1v-2Z"/>
</svg>

);
