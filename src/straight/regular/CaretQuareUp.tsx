import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretQuareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.17,9.371a1.113,1.113,0,0,1,1.66,0L18,15.021H6ZM24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V24H24ZM2,3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V22H2Z"/></svg>

);
