import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Acorn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,8c0-3.31-2.69-6-6-6h-4V0h-2V2H7C3.69,2,1,4.69,1,8v2H3v3.91c0,6.71,8.3,9.81,8.66,9.94l.34,.12,.34-.12c.35-.13,8.66-3.23,8.66-9.94v-3.91h2v-2Zm-4,5.91c0,4.64-5.55,7.31-7,7.92-1.45-.61-7-3.27-7-7.92v-3.91h14v3.91ZM3,8c0-2.21,1.79-4,4-4h10c2.21,0,4,1.79,4,4H3Z"/></svg>

);
