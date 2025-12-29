import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="21 9.261 16.668 4.929 14.547 7.05 17.997 10.5 0 10.5 0 13.5 17.997 13.5 14.547 16.95 16.668 19.071 21 14.739 21 19 24 19 24 5 21 5 21 9.261"/></svg>

);
