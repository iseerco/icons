import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExchangeAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8H0V6H19V1.872l4.629,4.236a1.113,1.113,0,0,1,0,1.66L19,12ZM5,11.872.371,16.108a1.113,1.113,0,0,0,0,1.66L5,22V18H24V16H5Z"/></svg>

);
