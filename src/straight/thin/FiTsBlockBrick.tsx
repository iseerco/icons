import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBlockBrick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0H2.5C1.122,0,0,1.121,0,2.5V24H24V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,2.5v3.5h-5V1h3.5c.827,0,1.5,.673,1.5,1.5ZM7,18v-5h10v5H7Zm0-12V1h10V6H7Zm4,1v5H1V7H11Zm-5,6v5H1v-5H6Zm12,0h5v5h-5v-5Zm-6-1V7h11v5H12ZM2.5,1h3.5V6H1V2.5c0-.827,.673-1.5,1.5-1.5ZM1,19H11v4H1v-4Zm11,4v-4h11v4H12Z"/></svg>

);
