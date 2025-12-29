import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19.071 7.332 14.739 3 19 3 19 0 5 0 5 3 9.261 3 4.929 7.332 7.05 9.453 10.5 6.003 10.5 24 13.5 24 13.5 6.003 16.95 9.453 19.071 7.332"/></svg>

);
