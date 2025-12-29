import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2h-2.5V0h-1V2H9V0h-1V2h-2.5c-1.379,0-2.5,1.122-2.5,2.5V21H24V4.5c0-1.378-1.121-2.5-2.5-2.5ZM5.5,3H21.5c.827,0,1.5,.673,1.5,1.5v2.5H4v-2.5c0-.827,.673-1.5,1.5-1.5Zm-1.5,17V8H23v12H4Zm-3,3H20v1H0V8H1v15Z"/></svg>

);
