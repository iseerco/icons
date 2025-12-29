import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hospital = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,6h-1v-3c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3v3h-1c-1.654,0-3,1.346-3,3v15h24v-15c0-1.654-1.346-3-3-3ZM2,22v-13c0-.551.448-1,1-1h1v14h-2Zm16,0H6V3c0-.551.448-1,1-1h10c.552,0,1,.449,1,1v19Zm4,0h-2v-14h1c.552,0,1,.449,1,1v13Zm-14-9h3v2h-3v-2Zm5,0h3v2h-3v-2Zm-5,4h3v2h-3v-2Zm5,0h3v2h-3v-2Zm-2-7v-2h-2v-2h2v-2h2v2h2v2h-2v2h-2Z"/></svg>

);
