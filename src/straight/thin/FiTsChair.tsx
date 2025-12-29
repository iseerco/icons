import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,13h-.5V2.5c0-1.379-1.122-2.5-2.5-2.5H7.5c-1.378,0-2.5,1.121-2.5,2.5V13h-.5c-1.378,0-2.5,1.121-2.5,2.5v8.5h1v-6H21v6h1V15.5c0-1.379-1.122-2.5-2.5-2.5Zm-1.5-10.5V13h-3V1h1.5c.827,0,1.5,.673,1.5,1.5ZM10,13V1h4V13h-4ZM6,2.5c0-.827,.673-1.5,1.5-1.5h1.5V13h-3V2.5Zm-3,14.5v-1.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5v1.5H3Z"/></svg>

);
