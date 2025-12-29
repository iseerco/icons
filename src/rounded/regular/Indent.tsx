import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Indent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z"/><path d="M23,9H9a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,19H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M23,14H9a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><path d="M1.707,16.245l2.974-2.974a1.092,1.092,0,0,0,0-1.542L1.707,8.755A1,1,0,0,0,0,9.463v6.074A1,1,0,0,0,1.707,16.245Z"/></svg>

);
