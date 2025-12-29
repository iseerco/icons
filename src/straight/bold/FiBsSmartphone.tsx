import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSmartphone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,0V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V0Zm9.005,22.015H10.993V20h2.012ZM7,18V3H17l0,15Z"/></svg>

);
