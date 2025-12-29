import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const F = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,2H22V0H5c-1.654,0-3,1.346-3,3V24h2V13h14v-2H4V3c0-.551,.449-1,1-1Z"/></svg>

);
