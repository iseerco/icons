import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBlogPencil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5v12.59l-3-3V7H3v12H13.09l3,3H0V5.5c0-1.93,1.57-3.5,3.5-3.5H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-7.91,7.5h-3.09v3.09l7.28,7.28c.85,.85,2.23,.85,3.09,0s.85-2.23,0-3.09l-7.28-7.28Z"/></svg>

);
