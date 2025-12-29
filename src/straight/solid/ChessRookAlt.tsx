import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessRookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H2V23a3,3,0,0,1,3-3H19a3,3,0,0,1,3,3ZM16,0V4H14V0H10V4H8V0H3V6A3.006,3.006,0,0,0,5,8.829V18H19V8.829A3.006,3.006,0,0,0,21,6V0ZM14,13H10V10a2,2,0,0,1,4,0Z"/></svg>

);
