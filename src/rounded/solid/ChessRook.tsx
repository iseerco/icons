import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessRook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,14v2H11V14a1,1,0,0,1,2,0Zm8-2.127V22h1a1,1,0,0,1,0,2H2a1,1,0,0,1,0-2H3V11.873A4.005,4.005,0,0,1,0,8V2A2,2,0,0,1,2,0H4A2,2,0,0,1,6,2V4H9V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V4h3V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2V8A4.005,4.005,0,0,1,21,11.873ZM15,14a3,3,0,0,0-6,0v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1Z"/></svg>

);
