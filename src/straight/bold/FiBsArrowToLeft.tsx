import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="6.003 10.5 9.453 7.05 7.332 4.929 3 9.261 3 5 0 5 0 19 3 19 3 14.739 7.332 19.071 9.453 16.95 6.003 13.5 24 13.5 24 10.5 6.003 10.5"/></svg>

);
