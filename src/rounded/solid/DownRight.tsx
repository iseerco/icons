import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.87,7.87c1.11-1.1,2.82-1.2,4.14-.11,.65,.54,.97,1.39,.97,2.23h0s0,9.01,0,9.01c0,2.21-1.79,3.99-4,3.99H10.1c-1.17,0-2.3-.61-2.81-1.66-.58-1.18-.36-2.52,.56-3.45l1.47-1.47L1.88,8.91c-1.17-1.17-1.17-3.07,0-4.24L4.71,1.84c1.17-1.17,3.07-1.17,4.24,0l7.45,7.5,1.47-1.48Z"/></svg>

);
