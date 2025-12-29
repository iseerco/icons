import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ethernet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,8v-3h-3v-3H6v3h-3v3H0v11c0,1.654,1.346,3,3,3h18c1.654,0,3-1.346,3-3v-11h-3Zm1,11c0,.551-.448,1-1,1h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2c-.551,0-1-.449-1-1v-9h3v-3h3v-3h8v3h3v3h3v9Z"/>
</svg>

);
