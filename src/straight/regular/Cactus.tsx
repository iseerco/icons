import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cactus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,24H7v-9h-2c-2.757,0-5-2.243-5-5v-2c0-1.654,1.346-3,3-3s3,1.346,3,3v1h1v-4c0-2.757,2.243-5,5-5s5,2.243,5,5v9h1v-1c0-1.654,1.346-3,3-3s3,1.346,3,3v2c0,2.757-2.243,5-5,5h-2v4Zm-8-2h6v-4h4c1.654,0,3-1.346,3-3v-2c0-.551-.448-1-1-1s-1,.449-1,1v3h-5V5c0-1.654-1.346-3-3-3s-3,1.346-3,3v6h-5v-3c0-.551-.448-1-1-1s-1,.449-1,1v2c0,1.654,1.346,3,3,3h4v9Z"/><rect x="10" y="19" width="2" height="2"/><rect x="10" y="5" width="2" height="2"/><rect x="12" y="12" width="2" height="2"/></svg>

);
