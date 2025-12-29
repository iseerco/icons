import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM3,12a9,9,0,1,1,9,9A9.011,9.011,0,0,1,3,12Zm10.061,3.889L10.939,18.01,6.7,13.768a2.5,2.5,0,0,1,0-3.536L10.939,5.99l2.122,2.121L10.671,10.5H18v3H10.671Z"/></svg>

);
