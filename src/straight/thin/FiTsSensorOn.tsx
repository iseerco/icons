import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSensorOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,8H2.5c-1.379,0-2.5,1.122-2.5,2.5v13.5H16V10.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,15H1V10.5c0-.827,.673-1.5,1.5-1.5H13.5c.827,0,1.5,.673,1.5,1.5v12.5Zm9-12h-1c0-5.514-4.486-10-10-10V0c6.065,0,11,4.935,11,11Zm-4,0h-1c0-3.309-2.691-6-6-6v-1c3.859,0,7,3.14,7,7Zm-15,1c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>

);
