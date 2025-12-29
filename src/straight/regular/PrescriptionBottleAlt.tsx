import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrescriptionBottleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,3c0-1.654-1.346-3-3-3H4C2.346,0,1,1.346,1,3v3h2v15c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V6h2v-3Zm-4,18c0,.552-.449,1-1,1H6c-.551,0-1-.448-1-1V6h14v15Zm2-17H3v-1c0-.552.449-1,1-1h16c.551,0,1,.448,1,1v1Zm-10,11h-3v-2h3v-3h2v3h3v2h-3v3h-2v-3Z"/></svg>

);
