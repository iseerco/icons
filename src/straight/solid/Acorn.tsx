import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Acorn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,8v1H1v-1C1,4.69,3.69,2,7,2h4V0h2V2h4c3.31,0,6,2.69,6,6ZM3,13.91c0,6.71,8.3,9.81,8.66,9.94l.34,.12,.34-.12c.35-.13,8.66-3.23,8.66-9.94v-2.91H3v2.91Z"/></svg>

);
