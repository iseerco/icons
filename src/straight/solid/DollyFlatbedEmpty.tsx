import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DollyFlatbedEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,18H6c-.551,0-1-.448-1-1V3c0-1.654-1.346-3-3-3H0v2h2c.551,0,1,.448,1,1v14c0,1.654,1.346,3,3,3v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h5v1c0,1.654,1.346,3,3,3s3-1.346,3-3v-1h1v-2Z"/>
</svg>

);
