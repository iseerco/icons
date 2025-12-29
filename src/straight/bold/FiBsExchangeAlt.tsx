import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExchangeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8H0V5H19V1.372l4.629,4.236a1.113,1.113,0,0,1,0,1.66L19,11.5ZM5,12.372.371,16.608a1.113,1.113,0,0,0,0,1.66L5,22.5V19H24V16H5Z"/></svg>

);
