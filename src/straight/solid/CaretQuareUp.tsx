import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretQuareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3A3,3,0,0,0,0,3V24H24V3A3,3,0,0,0,21,0ZM11.17,9.371a1.113,1.113,0,0,1,1.66,0L18,15.021H6Z"/></svg>

);
