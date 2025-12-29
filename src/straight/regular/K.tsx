import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const K = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19.563 24 22.01 24 14.194 12.962 21.98 0 19.65 0 12.434 12 3.996 12 3.996 0 1.996 0 1.996 24 3.996 24 3.996 14 12.475 14 19.563 24"/></svg>

);
