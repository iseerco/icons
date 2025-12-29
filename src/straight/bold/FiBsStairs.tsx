import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <polygon points="3 24 0 24 0 15 5 15 5 10 10 10 10 5 15 5 15 0 24 0 24 3 18 3 18 8 13 8 13 13 8 13 8 18 3 18 3 24"/>
</svg>

);
