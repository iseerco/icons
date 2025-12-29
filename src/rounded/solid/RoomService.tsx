import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RoomService = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,22a1,1,0,0,1-1,1H1a1,1,0,0,1,0-2H23A1,1,0,0,1,24,22ZM2,19H22a1,1,0,0,0,1-1V17A11.01,11.01,0,0,0,13,6.051V4.723a2,2,0,1,0-2,0V6.051A11.01,11.01,0,0,0,1,17v1A1,1,0,0,0,2,19Z"/></svg>

);
