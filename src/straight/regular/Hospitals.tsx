import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hospitals = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,5h-7v-2c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v21h24V8c0-1.654-1.346-3-3-3Zm-9,17H2V3c0-.551.448-1,1-1h8c.552,0,1,.449,1,1v19Zm10,0h-8v-3h2v-2h-2v-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2v-4h7c.552,0,1,.449,1,1v14ZM4,13h2v2h-2v-2Zm4,0h2v2h-2v-2Zm-4,4h2v2h-2v-2Zm4,0h2v2h-2v-2Zm10,0h2v2h-2v-2ZM8,6h2v2h-2v2h-2v-2h-2v-2h2v-2h2v2Z"/></svg>

);
