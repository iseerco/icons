import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Glass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.354,0l.955,7H17l-.425,2H2.582L4.273,21.405A3.012,3.012,0,0,0,7.246,24h9.508a3.012,3.012,0,0,0,2.973-2.595L22.646,0Z"/></svg>

);
