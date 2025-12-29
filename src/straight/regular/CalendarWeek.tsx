import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarWeek = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,18h16v-6H4v6Zm2-4h12v2H6v-2ZM21,2h-3V0h-2v2h-8V0h-2v2h-3c-1.654,0-3,1.346-3,3v19h24V5c0-1.654-1.346-3-3-3ZM3,4h18c.552,0,1,.449,1,1v3H2v-3c0-.551.448-1,1-1Zm-1,18v-12h20v12H2Z"/></svg>

);
