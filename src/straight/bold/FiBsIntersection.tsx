import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIntersection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,10v14h-3v-14c0-3.859-3.141-7-7-7s-7,3.141-7,7v14h-3v-14C2,4.486,6.486,0,12,0s10,4.486,10,10Z"/>
</svg>

);
