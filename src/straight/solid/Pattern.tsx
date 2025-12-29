import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pattern = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.35,0,0,1.35,0,3V24H24V3c0-1.65-1.35-3-3-3Zm-7,4h6v6h-6V4Zm-7,0c1.66,0,3,1.34,3,3s-1.34,3-3,3-3-1.34-3-3,1.34-3,3-3Zm.03,16.32l-3.75-3.75,3.75-3.75,3.75,3.75-3.75,3.75Zm6.2-.32l3.75-6,3.75,6h-7.5Z"/></svg>

);
