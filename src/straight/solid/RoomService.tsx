import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RoomService = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,19V17A11.01,11.01,0,0,1,11,6.051V4.723a2,2,0,1,1,2,0V6.051A11.01,11.01,0,0,1,23,17v2ZM0,21v2H24V21Z"/></svg>

);
