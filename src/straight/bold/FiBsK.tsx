import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsK = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="18.95 24 22.622 24 14.791 12.939 22.563 0 19.067 0 12.451 11 5 11 5 0 2 0 2 24 5 24 5 14 11.862 14 18.95 24"/></svg>

);
