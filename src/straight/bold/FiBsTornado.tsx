import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTornado = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24H10V21h5a1,1,0,0,0,0-2H7a4,4,0,0,1,0-8H20a1,1,0,0,0,0-2H4.5a4.5,4.5,0,0,1,0-9H24V3H4.5a1.5,1.5,0,0,0,0,3H20a4,4,0,0,1,0,8H7a1,1,0,0,0,0,2h8A4,4,0,0,1,15,24Z"/></svg>

);
