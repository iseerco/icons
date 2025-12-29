import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QuoteRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M0,8v6H7.91A6.006,6.006,0,0,1,2,19v2a8.009,8.009,0,0,0,8-8V4H4A4,4,0,0,0,0,8Z"/><path d="M18,4a4,4,0,0,0-4,4v6h7.91A6.006,6.006,0,0,1,16,19v2a8.009,8.009,0,0,0,8-8V4Z"/></g></svg>

);
