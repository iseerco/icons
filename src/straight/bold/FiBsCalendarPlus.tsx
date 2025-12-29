import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.5,16.5h-2.5v-3h2.5v-2.5h3v2.5h2.5v3h-2.5v2.5h-3v-2.5ZM24,5.5V24H0V5.5c0-1.93,1.57-3.5,3.5-3.5h2.5V0h3V2h6V0h3V2h2.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,3.5H3v12H21V9Z"/></svg>

);
