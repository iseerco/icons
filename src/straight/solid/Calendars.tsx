import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Calendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,24H0V8H2v14H20v2ZM24,7v-2c0-1.654-1.346-3-3-3h-2V0h-2V2h-6V0h-2V2h-2c-1.654,0-3,1.346-3,3v2H24ZM4,9v11H24V9H4Z"/></svg>

);
