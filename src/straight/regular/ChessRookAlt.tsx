import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessRookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,18V8.829A3.006,3.006,0,0,0,21,6V0H3V6A3.006,3.006,0,0,0,5,8.829V18a3,3,0,0,0-3,3v3H22V21A3,3,0,0,0,19,18ZM6,7A1,1,0,0,1,5,6V2H8V5h2V2h4V5h2V2h3V6a1,1,0,0,1-1,1H17V18H7V7ZM20,22H4V21a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm-6-9H10V10a2,2,0,0,1,4,0Z"/></svg>

);
