import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,9v3h3v2h-3v3h5v2H5V9H0v13H24V9H7Zm5,3h4v2h-4v-2Zm6,7h-4v-2h4v2ZM0,7v-2c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3v2H0Z"/></svg>

);
