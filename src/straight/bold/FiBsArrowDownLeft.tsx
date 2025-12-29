import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.97,2.15L21.85,.03,3,18.88V9H0v12.5c0,1.38,1.12,2.5,2.5,2.5H15v-3H5.12L23.97,2.15Z"/></svg>

);
