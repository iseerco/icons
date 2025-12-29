import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsQuoteRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,8v6H7a5.006,5.006,0,0,1-5,5v3a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z"/><path d="M18,4a4,4,0,0,0-4,4v6h7a5.006,5.006,0,0,1-5,5v3a8.009,8.009,0,0,0,8-8V4Z"/></svg>

);
