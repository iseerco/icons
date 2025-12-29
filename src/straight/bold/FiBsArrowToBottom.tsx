import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19.071 16.668 16.95 14.547 13.5 17.997 13.5 0 10.5 0 10.5 17.997 7.05 14.547 4.929 16.668 9.261 21 5 21 5 24 19 24 19 21 14.739 21 19.071 16.668"/></svg>

);
