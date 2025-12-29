import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blender = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,15v2h13.18L22.007,0H5C2.794,0,1,1.794,1,4v7c0,2.206,1.794,4,4,4h1Zm-3-4v-7c0-1.103.897-2,2-2h1v1h3v2h-3v2h3v2h-3v2h3v2h-4c-1.103,0-2-.897-2-2Zm19,11v2H3v-2c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Z"/>
</svg>

);
