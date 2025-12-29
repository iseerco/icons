import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableColumns = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7v-2c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3v2H0Zm11,2H0v13H11V9Zm2,0v13h11V9H13Z"/></svg>

);
