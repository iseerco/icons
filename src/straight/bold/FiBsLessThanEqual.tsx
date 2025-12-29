import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLessThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,21h18v3H3v-3ZM21,.026L2.746,9.507l18.254,9.481v-3.38l-11.746-6.101,11.746-6.101V.026Z"/>
</svg>

);
