import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square7 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3V24ZM16,7.522v-1.522H8v2h5.526l-4.537,9.095,1.79,.893,5.22-10.465Z"/></svg>

);
