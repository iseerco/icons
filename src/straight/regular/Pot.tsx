import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4H13V2h3V0H8V2h3V4H0V6H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6h2ZM20,21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H20Z"/></svg>

);
