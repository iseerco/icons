import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.01,9.01,0,0,0,12,3Zm1.768,12.268,4.25-4.25L15.9,8.9l-3.9,3.9L8.1,8.9,5.982,11.018l4.25,4.25a2.5,2.5,0,0,0,3.536,0Z"/></svg>

);
