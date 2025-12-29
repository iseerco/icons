import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551,.448-1,1-1H21c.552,0,1,.449,1,1V22ZM14,6h2v12h-2v-4h-3c-1.654,0-3-1.346-3-3V6h2v5c0,.551,.448,1,1,1h3V6Z"/></svg>

);
