import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCreditCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="6.5" cy="14.5" r="1.5"/><path d="M21,3H3A3,3,0,0,0,0,6V21H24V6A3,3,0,0,0,21,3Zm0,3V8H3V6ZM3,18V11H21v7Z"/></svg>

);
