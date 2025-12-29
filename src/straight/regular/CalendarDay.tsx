import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarDay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,18h6v-6h-6v6Zm2-4h2v2h-2v-2ZM21.002,2h-3V0h-2v2h-8V0h-2v2h-3C1.348,2,.002,3.346.002,5v19h24V5c0-1.654-1.346-3-3-3ZM3.002,4h18c.552,0,1,.449,1,1v3H2.002v-3c0-.551.448-1,1-1Zm-1,18v-12h20v12H2.002Z"/></svg>

);
