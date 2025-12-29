import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,2h-2.5V0h-3v2h-6V0h-3v2h-2.5c-1.93,0-3.5,1.57-3.5,3.5v18.5h24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,21v-12h18v12H3Zm13.243-8.227l-2.122,2.122,2.122,2.122-2.121,2.121-2.122-2.122-2.122,2.122-2.121-2.121,2.122-2.122-2.122-2.122,2.121-2.121,2.122,2.122,2.122-2.122,2.121,2.121Z"/></svg>

);
