import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.207,13.207l-2.793,2.793,2.793,2.793-1.414,1.414-2.793-2.793-2.793,2.793-1.414-1.414,2.793-2.793-2.793-2.793,1.414-1.414,2.793,2.793,2.793-2.793,1.414,1.414Zm7.793-8.207v19H0V5c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3Zm-22,0v3h20v-3c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1Zm20,17v-12H2v12h20Z"/></svg>

);
