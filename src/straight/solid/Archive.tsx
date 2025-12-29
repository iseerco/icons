import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Archive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A3,3,0,0,0,2,3v8H22V3A3,3,0,0,0,19,0ZM14,7H10V5h4Z"/><path d="M2,13V24H22V13Zm12,6H10V17h4Z"/></svg>

);
