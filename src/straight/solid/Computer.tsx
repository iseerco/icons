import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Computer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13V4a3,3,0,0,0-3-3H3A3,3,0,0,0,0,4v9Z"/><polygon points="24 19 24 15 0 15 0 19 11 19 11 21 6 21 6 23 18 23 18 21 13 21 13 19 24 19"/></svg>

);
