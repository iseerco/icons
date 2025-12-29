import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendBack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,11H0V3C0,1.346,1.346,0,3,0h5c1.654,0,3,1.346,3,3v8Zm13,13h-11v-8c0-1.654,1.346-3,3-3h5c1.654,0,3,1.346,3,3v8Zm-11-11.997c.836-.629,1.875-1.003,3-1.003h2v-2c0-1.654-1.346-3-3-3h-2v6.003Zm-2,3.997c0-1.125.373-2.164,1.003-3h-6.003v5h5v-2Z"/></svg>

);
