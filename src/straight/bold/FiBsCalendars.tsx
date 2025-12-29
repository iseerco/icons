import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2h-.5V0h-3V2h-5V0h-3V2h-.5c-1.93,0-3.5,1.57-3.5,3.5v13.5H24V5.5c0-1.93-1.57-3.5-3.5-3.5Zm-12.5,14V8h13v8H8Zm-5,5H20v3H0V8H3v13Z"/></svg>

);
