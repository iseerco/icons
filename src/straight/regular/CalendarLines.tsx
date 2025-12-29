import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarLines = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5V24H24V5c0-1.654-1.346-3-3-3ZM3,4H21c.552,0,1,.449,1,1v3H2v-3c0-.551,.448-1,1-1Zm-1,18V10H22v12H2Zm3-9h14v2H5v-2Zm0,4h7v2H5v-2Z"/></svg>

);
