import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdCardClipAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,7v17H0V7c0-1.654,1.346-3,3-3h6v-1c0-1.654,1.346-3,3-3s3,1.346,3,3v1h6c1.654,0,3,1.346,3,3Zm-13,0h2V3c0-.552-.449-1-1-1s-1,.448-1,1v4Zm-1.5,5.5c0,1.379,1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5-1.121-2.5-2.5-2.5-2.5,1.121-2.5,2.5Zm7.5,6.5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v2h2v-2c0-.552.449-1,1-1h4c.551,0,1,.448,1,1v2h2v-2Z"/></svg>

);
