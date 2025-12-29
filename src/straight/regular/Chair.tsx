import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,13V3c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3V13c-1.654,0-3,1.346-3,3v8h2v-5H20v5h2v-8c0-1.654-1.346-3-3-3Zm-2-10V13h-2V2h1c.551,0,1,.448,1,1Zm-6,10V2h2V13h-2ZM7,3c0-.552,.449-1,1-1h1V13h-2V3Zm-3,14v-1c0-.552,.449-1,1-1h14c.551,0,1,.448,1,1v1H4Z"/></svg>

);
