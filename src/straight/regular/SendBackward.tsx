import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,8h-10c-1.654,0-3,1.346-3,3v13h16v-13c0-1.654-1.346-3-3-3Zm1,14h-12v-11c0-.552.449-1,1-1h10c.551,0,1,.448,1,1v11ZM2,14h4v2H0V3C0,1.346,1.346,0,3,0h10c1.654,0,3,1.346,3,3v3h-2v-3c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v11Z"/></svg>

);
