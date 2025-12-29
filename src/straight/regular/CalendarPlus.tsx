import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5V24H24V5c0-1.654-1.346-3-3-3ZM3,4H21c.551,0,1,.449,1,1v3H2v-3c0-.551,.449-1,1-1Zm-1,18V10H22v12H2Zm11-7h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3Z"/></svg>

);
