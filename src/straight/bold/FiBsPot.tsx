import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5H13.5V3H16V0H8V3h2.5V5H0V8H2V20.5A3.5,3.5,0,0,0,5.5,24h13A3.5,3.5,0,0,0,22,20.5V8h2ZM19,20.5a.5.5,0,0,1-.5.5H5.5a.5.5,0,0,1-.5-.5V8H19Z"/></svg>

);
