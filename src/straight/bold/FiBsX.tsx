import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="13.86 12 22.661 0 18.94 0 12 9.463 5.06 0 1.339 0 10.14 12 1.339 24 5.06 24 12 14.537 18.94 24 22.661 24 13.86 12"/></svg>

);
