import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsKeynote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18v-1h-1.648l-2.5-7H5v-3.5c0-1.93,1.57-3.5,3.5-3.5h1.551c.232,1.14,1.242,2,2.449,2h3c1.379,0,2.5-1.122,2.5-2.5s-1.121-2.5-2.5-2.5h-3c-1.208,0-2.217,.86-2.449,2h-1.551c-2.481,0-4.5,2.019-4.5,4.5v3.913l-2.352,6.587H0v1H11.5v5H7v1h10v-1h-4.5v-5h11.5ZM12.5,1h3c.827,0,1.5,.673,1.5,1.5s-.673,1.5-1.5,1.5h-3c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5ZM2.709,17l2.143-6h14.295l2.143,6H2.709Z"/></svg>

);
