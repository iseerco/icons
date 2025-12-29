import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrFlorinSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,1.5c0,.83-.67,1.5-1.5,1.5h-3.15c-.98,0-1.87,.58-2.28,1.47l-2.06,4.53h2.49c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5h-3.85l-3.99,8.78c-.89,1.96-2.86,3.22-5.01,3.22H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h3.15c.98,0,1.87-.58,2.28-1.47l3.42-7.53h-2.85c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h4.22l2.63-5.78c.89-1.96,2.86-3.22,5.01-3.22h3.15c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
