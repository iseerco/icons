import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarLines = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,8v-3c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3v3H0Zm24,2v14l-23.923-.026V9.974l23.923,.026Zm-12,8H5v2h7v-2Zm7-4H5v2h14v-2Z"/></svg>

);
