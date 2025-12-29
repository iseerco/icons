import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheckInCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v19H0v-5h3v2h18v-11H3v2H0v-7c0-1.654,1.346-3,3-3h3V0h3v2h6V0h3v2h3c1.654,0,3,1.346,3,3ZM6.979,19.484l3.65-3.157c.494-.443.494-1.217,0-1.66l-3.65-3.183v2.516H0v3h6.979v2.484Z"/>
</svg>

);
