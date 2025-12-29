import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignPosts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,2V0h-2v2H5V0h-2v2c-1.654,0-3,1.346-3,3v13h3v6h2v-6h14v6h2v-6h3V5c0-1.654-1.346-3-3-3Zm1,14H2V5c0-.552.449-1,1-1h18c.551,0,1,.448,1,1v11Z"/>
</svg>

);
