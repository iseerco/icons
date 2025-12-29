import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTableLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.122,2,0,3.121,0,4.5V22H24V4.5c0-1.379-1.122-2.5-2.5-2.5ZM2.5,3H21.5c.827,0,1.5,.673,1.5,1.5v2.5H1v-2.5c0-.827,.673-1.5,1.5-1.5Zm-1.5,5H7v13H1V8Zm7,13V8h15v13H8Z"/></svg>

);
