import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sauce = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,8H7V5h3.167L11,0h2l.833,5H17Zm-3.026,8h-4v2h4ZM20,13V24H4V13a3,3,0,0,1,3-3H17A3,3,0,0,1,20,13Zm-4.026,1h-8v6h8Z"/></svg>

);
