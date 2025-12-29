import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessRook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,12v2H11V12a1,1,0,0,1,2,0ZM0,9V0H6V4H9V0h6V4h3V0h6V9a3,3,0,0,1-3,3v8H3V12A3,3,0,0,1,0,9Zm9,7h6V12a3,3,0,0,0-6,0ZM1,22v2H23V22Z"/></svg>

);
