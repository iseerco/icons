import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrQuoteRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,4H4A4,4,0,0,0,0,8v4a2,2,0,0,0,2,2H7a5.006,5.006,0,0,1-5,5,1.5,1.5,0,0,0,0,3,8.009,8.009,0,0,0,8-8V6A2,2,0,0,0,8,4Z"/><path d="M22,4H18a4,4,0,0,0-4,4v4a2,2,0,0,0,2,2h5a5.006,5.006,0,0,1-5,5,1.5,1.5,0,0,0,0,3,8.009,8.009,0,0,0,8-8V6A2,2,0,0,0,22,4Z"/></svg>

);
