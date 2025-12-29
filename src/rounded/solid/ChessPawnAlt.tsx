import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPawnAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,7A1,1,0,0,1,8,6h.537a4,4,0,1,1,6.926,0H16a1,1,0,0,1,0,2H8A1,1,0,0,1,7,7ZM20,20H4a2,2,0,0,0,0,4H20a2,2,0,0,0,0-4ZM15.067,10H8.933C8.569,15.261,6.775,18,5,18H19C17.225,18,15.431,15.261,15.067,10Z"/></svg>

);
