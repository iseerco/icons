import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimePast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.032,12.032,0,0,0,3.529,3.529L1,1V6.909A1.09,1.09,0,0,0,2.091,8H8L5.647,5.647A8.985,8.985,0,1,1,3,12H0A12,12,0,1,0,12,0Z"/><polygon points="10 7 10 13.621 13.439 17.061 15.561 14.939 13 12.379 13 7 10 7"/></svg>

);
