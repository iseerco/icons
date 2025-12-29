import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarDays = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-3V0h-2V2H8V0h-2V2H3C1.35,2,0,3.35,0,5V24H24V5c0-1.65-1.35-3-3-3ZM3,4H21c.55,0,1,.45,1,1v2H2v-2c0-.55,.45-1,1-1Zm13,5v3h-3v-3h3Zm-5,3h-3v-3h3v3Zm-5,0H2v-3H6v3Zm0,2v3H2v-3H6Zm2,0h3v3h-3v-3Zm3,5v3h-3v-3h3Zm2,0h3v3h-3v-3Zm0-2v-3h3v3h-3Zm5-3h4v3h-4v-3Zm0-2v-3h4v3h-4ZM2,19H6v3H2v-3Zm16,3v-3h4v3h-4Z"/></svg>

);
