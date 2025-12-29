import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsListDropdown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm-.5,3l-2.76,2.71c-.39,.39-1.01,.39-1.4,0l-2.76-2.71h6.91ZM3,21V8H21v13H3Zm2-6h14v3H5v-3Zm0-5h14v3H5v-3Z"/></svg>

);
