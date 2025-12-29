import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDoorClosed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,23V2.5c0-1.378-1.121-2.5-2.5-2.5H6.5c-1.379,0-2.5,1.122-2.5,2.5V23H0v1H24v-1h-4ZM5,2.5c0-.827,.673-1.5,1.5-1.5h11c.827,0,1.5,.673,1.5,1.5V23H5V2.5Zm12,9.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>

);
