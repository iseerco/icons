import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V24H24ZM2,3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1V22H2Z"/><path d="M14.431,13.4,9.719,18.106,8.305,16.692l4.712-4.712L8.344,7.308,9.758,5.894l4.673,4.672a2,2,0,0,1,0,2.829Z"/></g></svg>

);
