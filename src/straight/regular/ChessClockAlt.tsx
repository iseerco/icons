import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessClockAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8a3,3,0,0,0-3-3H19V3h2V1H15V3h2V5H9V3H3V5A3,3,0,0,0,0,8V22H2v2H4V22H20v2h2V22h2ZM22,20H2V8A1,1,0,0,1,3,7H21a1,1,0,0,1,1,1ZM16.5,9A4.5,4.5,0,1,0,21,13.5,4.505,4.505,0,0,0,16.5,9Zm0,7a2.5,2.5,0,0,1-2.242-1.415L16.5,13.5l-2.263-1.043A2.5,2.5,0,1,1,16.5,16Zm-9-7A4.5,4.5,0,1,0,12,13.5,4.505,4.505,0,0,0,7.5,9Zm0,7a2.452,2.452,0,0,1-.7-.112l.692-2.395-2.37.742A2.456,2.456,0,0,1,5,13.5,2.5,2.5,0,1,1,7.5,16Z"/></svg>

);
