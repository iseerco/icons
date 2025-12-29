import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm21,0a9,9,0,1,0-9,9A9.01,9.01,0,0,0,21,12ZM8.732,13.768l4.25,4.25L15.1,15.9l-3.9-3.9,3.9-3.9L12.982,5.982l-4.25,4.25a2.5,2.5,0,0,0,0,3.536Z"/></svg>

);
