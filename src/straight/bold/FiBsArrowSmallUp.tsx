import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.061,9.525,13.768,5.232a2.5,2.5,0,0,0-3.536,0L5.939,9.525l2.122,2.121L10.5,9.207V19h3V9.207l2.439,2.439Z"/></svg>

);
