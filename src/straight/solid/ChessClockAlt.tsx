import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessClockAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5V3H15V5H7V3H9V1H3V3H5V5H3A3,3,0,0,0,0,8V21H2v2H4V21H20v2h2V21h2V8A3,3,0,0,0,21,5Zm-5,8.54-2.865-.952a3.5,3.5,0,1,1,.022,1.894ZM4,13.5A3.5,3.5,0,1,1,7.5,17a3.456,3.456,0,0,1-1.669-.442L7,14,4.477,15.234A3.465,3.465,0,0,1,4,13.5Z"/></svg>

);
