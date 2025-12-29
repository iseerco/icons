import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessRook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9.5V0H0V9.5a3.507,3.507,0,0,0,3,3.465V21H1v3H23V21H21V12.965A3.507,3.507,0,0,0,24,9.5ZM6,21V10H3.5A.5.5,0,0,1,3,9.5V3H7V7h3V3h4V7h3V3h4V9.5a.5.5,0,0,1-.5.5H18V21Zm9-8v4H9V13a3,3,0,0,1,6,0Z"/></svg>

);
