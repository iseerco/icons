import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTs2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,24H4v-.5c0-3.597,3.39-5.216,6.978-6.93,3.944-1.884,8.022-3.832,8.022-8.57,0-3.86-3.14-7-7-7s-7,3.14-7,7h-1C4,3.589,7.589,0,12,0s8,3.589,8,8c0,5.368-4.564,7.548-8.591,9.472-3.24,1.547-6.063,2.896-6.38,5.528h14.971v1Z"/></svg>

);
