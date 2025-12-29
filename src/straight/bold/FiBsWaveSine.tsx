import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWaveSine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5,21c-4.71,0-6.397-6.49-6.952-8.623-.756-2.909-2.072-6.377-4.048-6.377-1.739,0-3.5,2.748-3.5,8H0C0,7.42,2.612,3,6.5,3c4.71,0,6.397,6.49,6.952,8.623.756,2.909,2.072,6.377,4.048,6.377,1.739,0,3.5-2.748,3.5-8h3c0,6.58-2.612,11-6.5,11Z"/></svg>

);
