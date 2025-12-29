import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessRookAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,20H20a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2H2A2,2,0,0,1,4,20ZM21,2V6a3.006,3.006,0,0,1-2,2.829V18H5V8.829A3.006,3.006,0,0,1,3,6V2A2,2,0,0,1,5,0H6A2,2,0,0,1,8,2V4a1,1,0,0,0,2,0V2a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2V4a1,1,0,0,0,2,0V2a2,2,0,0,1,2-2h1A2,2,0,0,1,21,2Zm-7,9a2,2,0,0,0-4,0v2a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1Z"/></svg>

);
