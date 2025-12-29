import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tornado = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,24H14a1,1,0,0,1,0-2h2a1,1,0,0,0,0-2H12a3,3,0,0,1,0-6h7a1,1,0,0,0,0-2H6C-1.932,11.747-1.926.25,6,0H20a4,4,0,0,1,0,8H6A1,1,0,0,1,6,6H20a2,2,0,0,0,0-4H6a4,4,0,0,0,0,8H19a3,3,0,0,1,0,6H12a1,1,0,0,0,0,2h4A3,3,0,0,1,16,24Z"/></svg>

);
