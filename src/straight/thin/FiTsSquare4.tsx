import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquare4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.121,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23ZM15,6h1v12h-1v-4h-4.5c-1.379,0-2.5-1.122-2.5-2.5V6h1v5.5c0,.827,.673,1.5,1.5,1.5h4.5V6Z"/></svg>

);
