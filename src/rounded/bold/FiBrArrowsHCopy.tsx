import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowsHCopy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.558,1l-3.1,3.049a1.5,1.5,0,0,0,2.1,2.141l1.933-1.9V19.743L8.544,17.828a1.5,1.5,0,1,0-2.1,2.139l3.1,3.05a3.489,3.489,0,0,0,2.447.99h0a3.493,3.493,0,0,0,2.449-.99c.205-.2.39-.383.511-.5l2.591-2.546a1.5,1.5,0,1,0-2.1-2.139l-1.95,1.915V4.258l1.964,1.931a1.5,1.5,0,0,0,2.1-2.141L14.458,1A3.522,3.522,0,0,0,9.558,1Z"/></svg>

);
