import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowSmallLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,10.5H10.207l2.439-2.439L10.525,5.939,6.232,10.232a2.5,2.5,0,0,0,0,3.536l4.293,4.293,2.121-2.122L10.207,13.5H19Z"/></svg>

);
