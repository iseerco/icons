import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHeartRate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="16.474 23.821 11.92 9.652 7.603 21.645 4 13 0 13 0 10 6 10 7.397 13.355 12.08 .348 16.526 14.179 17.919 10 24 10 24 13 20.081 13 16.474 23.821"/></svg>

);
