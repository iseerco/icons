import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Calendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2h-2V0h-2V2h-6V0h-2V2h-2c-1.654,0-3,1.346-3,3v15H24V5c0-1.654-1.346-3-3-3ZM7,4h14c.552,0,1,.449,1,1v2H6v-2c0-.551,.448-1,1-1Zm-1,14V9H22v9H6Zm-4,4H20v2H0V8H2v14Z"/></svg>

);
