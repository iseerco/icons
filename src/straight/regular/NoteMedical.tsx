import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoteMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h16.414l7.586-7.586V3c0-1.654-1.346-3-3-3ZM2,3c0-.552.449-1,1-1h18c.551,0,1,.448,1,1v12h-7v7H2V3Zm18.586,14l-3.586,3.586v-3.586h3.586Zm-9.586-1v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2Z"/></svg>

);
