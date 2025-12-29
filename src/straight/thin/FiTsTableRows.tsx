import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2H2.5C1.121,2,0,3.121,0,4.5V22H24V4.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,2.5v6.5H6V3h15.5c.827,0,1.5,.673,1.5,1.5ZM1,4.5c0-.827,.673-1.5,1.5-1.5h2.5V21H1V4.5ZM6,21V12H23v9H6Z"/></svg>

);
