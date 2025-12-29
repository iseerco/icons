import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarDays = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,2h-1.5V0h-3V2H8V0h-3V2h-1.5C1.57,2,0,3.57,0,5.5V24H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3.5,5H20.5c.28,0,.5,.22,.5,.5v1.5H3v-1.5c0-.28,.22-.5,.5-.5Zm6.5,9v-4h4v4h-4Zm4,3v4h-4v-4h4Zm-7-3H3v-4H7v4Zm10-4h4v4h-4v-4ZM3,17H7v4H3v-4Zm14,4v-4h4v4h-4Z"/></svg>

);
