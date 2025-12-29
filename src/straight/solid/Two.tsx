import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Two = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,24H4v-1c0-3.672,3.451-5.453,6.789-7.174,3.708-1.913,7.211-3.719,7.211-7.826,0-3.309-2.691-6-6-6s-6,2.691-6,6h-2C4,3.589,7.589,0,12,0s8,3.589,8,8c0,5.325-4.406,7.598-8.294,9.603-2.619,1.351-4.933,2.544-5.547,4.397h13.841v2Z"/></svg>

);
