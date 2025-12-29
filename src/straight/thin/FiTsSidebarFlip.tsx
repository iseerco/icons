import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSidebarFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.122,2,0,3.121,0,4.5V22H24V4.5c0-1.379-1.122-2.5-2.5-2.5ZM1,4.5c0-.827,.673-1.5,1.5-1.5H15V21H1V4.5ZM23,21h-7V3h5.5c.827,0,1.5,.673,1.5,1.5V21Zm-5-11h3v1h-3v-1Zm0,4h3v1h-3v-1Zm0-8h3v1h-3v-1Z"/></svg>

);
