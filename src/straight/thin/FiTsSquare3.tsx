import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquare3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.121,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Zm-6-8.5c0,1.93-1.57,3.5-3.5,3.5h-5.5v-1h5.5c1.379,0,2.5-1.122,2.5-2.5s-1.121-2.5-2.5-2.5h-4.5v-1h4c1.103,0,2-.897,2-2s-.897-2-2-2h-5v-1h5c1.654,0,3,1.346,3,3,0,.928-.432,1.748-1.096,2.299,1.232,.543,2.096,1.771,2.096,3.201Z"/></svg>

);
