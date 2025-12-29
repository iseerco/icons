import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarDays = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,14H4v4H0v-4Zm6,4h5v-4H6v4ZM0,12H4v-4H0v4Zm6,12h5v-4H6v4Zm7-12h5v-4h-5v4Zm-7,0h5v-4H6v4ZM0,24H4v-4H0v4ZM20,12h4v-4h-4v4Zm-7,12h5v-4h-5v4Zm7,0h4v-4h-4v4Zm1-22h-3V0h-2V2H8V0h-2V2H3C1.35,2,0,3.35,0,5v1H24v-1c0-1.65-1.35-3-3-3Zm-1,16h4v-4h-4v4Zm-7,0h5v-4h-5v4Z"/></svg>

);
