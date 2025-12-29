import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ethernet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,8c0-1.654-1.346-3-3-3,0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3-1.654,0-3,1.346-3,3-1.654,0-3,1.346-3,3v7c0,2.209,1.791,4,4,4h1v-4c0-.552.448-1,1-1s1,.448,1,1v4h2v-4c0-.552.448-1,1-1s1,.448,1,1v4h2v-4c0-.552.447-1,1-1s1,.448,1,1v4h2v-4c0-.552.447-1,1-1s1,.448,1,1v4h1c2.209,0,4-1.791,4-4v-7c0-1.654-1.346-3-3-3Z"/>
</svg>

);
