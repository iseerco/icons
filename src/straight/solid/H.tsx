import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const H = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="20 0 20 11 4 11 4 0 2 0 2 24 4 24 4 13 20 13 20 24 22 24 22 0 20 0"/></svg>

);
