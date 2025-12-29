import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonDress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm9.762,12.174l-3.238-3.549,1.11,8.874h-2.133v4h-2v-4h-2v4h-2v-4h-2.133l1.11-8.874-3.238,3.549-1.477-1.349,5.88-6.427c.547-.552,1.297-.899,2.124-.899h1.469c.827,0,1.576,.346,2.124,.899l5.88,6.427-1.477,1.349Z"/></svg>

);
