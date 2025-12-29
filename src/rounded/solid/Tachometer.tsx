import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tachometer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.9,11.437A12,12,0,0,0,4,4.052a12.055,12.055,0,0,0-.246,17.66A4.847,4.847,0,0,0,7.114,23H16.88a4.988,4.988,0,0,0,3.508-1.429A11.942,11.942,0,0,0,23.9,11.437Zm-6.194-2.73-3.781,3.781a2,2,0,1,1-1.414-1.414l3.781-3.781A1,1,0,0,1,17.707,8.707Z"/></svg>

);
