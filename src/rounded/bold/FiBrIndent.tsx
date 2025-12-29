import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrIndent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.5,6H1.5a1.5,1.5,0,0,1,0-3h21a1.5,1.5,0,0,1,0,3Z"/><path d="M22.5,11H9.5a1.5,1.5,0,0,1,0-3h13a1.5,1.5,0,0,1,0,3Z"/><path d="M22.5,21H1.5a1.5,1.5,0,0,1,0-3h21a1.5,1.5,0,0,1,0,3Z"/><path d="M22.5,16H9.5a1.5,1.5,0,0,1,0-3h13a1.5,1.5,0,0,1,0,3Z"/><path d="M1.707,15.745l2.974-2.974a1.092,1.092,0,0,0,0-1.542L1.707,8.255A1,1,0,0,0,0,8.963v6.074A1,1,0,0,0,1.707,15.745Z"/></svg>

);
