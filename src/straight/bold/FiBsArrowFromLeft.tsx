import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.12,9.882,18.171,4.931,16.05,7.052,19.5,10.5H3V5H0V19H3V13.5H19.5l-3.449,3.45,2.121,2.121,4.95-4.95A3,3,0,0,0,23.12,9.882Z"/></svg>

);
