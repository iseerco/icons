import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalendarImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,13c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1ZM24,4.5v19.5H0V4.5c0-1.379,1.122-2.5,2.5-2.5h3.5V0h1v2h10V0h1v2h3.5c1.378,0,2.5,1.121,2.5,2.5Zm-1,4.5H1v13.793l8.942-8.942,4.442,4.442,8.615-8.615v-.678ZM1,4.5v3.5h22v-3.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5Zm22,18.5v-11.908l-8.615,8.615-4.442-4.442-7.735,7.735h20.793Z"/></svg>

);
