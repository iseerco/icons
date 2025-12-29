import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5V24H24V5c0-1.654-1.346-3-3-3ZM2,22V10h7v-2H2v-3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1v3h-7v2h7v12H2ZM11,8h2v8h-2V8Zm0,10h2v2h-2v-2Z"/></svg>

);
