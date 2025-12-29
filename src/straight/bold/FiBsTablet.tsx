import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,0V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V0ZM13,18v2H11V18H5V3H19l0,15Z"/></svg>

);
