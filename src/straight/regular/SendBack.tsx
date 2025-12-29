import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendBack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,13h-3v-4c0-1.654-1.346-3-3-3h-4v-3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v8h6v7h7v6h11v-8c0-1.654-1.346-3-3-3ZM2,9V3c0-.552.449-1,1-1h5c.551,0,1,.448,1,1v6H2Zm11,7h-5v-5h3v-3h4c.551,0,1,.448,1,1v4c-1.654,0-3,1.346-3,3Zm9,6h-7v-6c0-.552.449-1,1-1h5c.551,0,1,.448,1,1v6Z"/></svg>

);
