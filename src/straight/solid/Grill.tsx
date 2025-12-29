import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grill = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.852,17.467,21.118,24H18.882l-2.855-5.71A11.849,11.849,0,0,1,13,18.949V24H11V18.949a11.849,11.849,0,0,1-3.027-.659L5.118,24H2.882l3.266-6.533A12.006,12.006,0,0,1,0,7V6H24V7A12.006,12.006,0,0,1,17.852,17.467ZM13,0H11V4h2Zm4,0H15V4h2ZM9,0H7V4H9Z"/></svg>

);
