import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableRows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,2h14c1.654,0,3,1.346,3,3v6H7V2Zm0,11v9H24V13H7ZM5,2H3C1.346,2,0,3.346,0,5V22H5V2Z"/></svg>

);
