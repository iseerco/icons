import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tickets = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,24H7v-2h9c2.757,0,5-2.243,5-5V5h2v12c0,3.859-3.14,7-7,7Zm0-24h-3v1c0,1.657-1.343,3-3,3s-3-1.343-3-3V0h-3C2.346,0,1,1.346,1,3v14c0,1.654,1.346,3,3,3h3v-1c0-1.657,1.343-3,3-3s3,1.343,3,3v1s3,0,3,0c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3Z"/>
</svg>

);
