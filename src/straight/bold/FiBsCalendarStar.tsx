import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,2h-2.5V0h-3v2h-6V0h-3v2h-2.5c-1.93,0-3.5,1.57-3.5,3.5v18.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,21v-12h18v12H3Zm10.417-7.493h2.885v1.261l-2.039,1.18.845,2.568-1.004.701-2.088-1.615-2.107,1.629-.97-.73.826-2.582-2.054-1.142v-1.269h2.901l.758-2.907h1.289l.758,2.907Z"/></svg>

);
