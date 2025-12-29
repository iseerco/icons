import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSauce = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,9h-.5V5h-2.59L13.41,0h-2.819l-1,5h-2.59v4h-.5c-1.378,0-2.5,1.121-2.5,2.5v12.5H20V11.5c0-1.379-1.122-2.5-2.5-2.5ZM11.41,1h1.181l.8,4h-2.781l.8-4Zm-3.41,5h8v3H8v-3Zm11,17H5V11.5c0-.827,.673-1.5,1.5-1.5h11c.827,0,1.5,.673,1.5,1.5v11.5Zm-11-4h8v-5H8v5Zm1-4h6v3h-6v-3Z"/></svg>

);
