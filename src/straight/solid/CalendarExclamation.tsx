import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,10v-2h9v-3c0-1.654-1.346-3-3-3h-3V0h-2V2H8V0h-2V2H3C1.346,2,0,3.346,0,5v3H9v2H0v14H24V10H15Zm-2,12h-2v-2h2v2Zm0-4h-2V8h2v10Z"/></svg>

);
