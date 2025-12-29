import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4V6H0V4H11V2H8V0h8V2H13V4ZM2,21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8H2Z"/></svg>

);
