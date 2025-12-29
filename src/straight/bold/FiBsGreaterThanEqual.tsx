import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGreaterThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,21h18v3H3v-3ZM3,.026v3.38l11.746,6.101L3,15.608v3.38l18.254-9.481L3,.026Z"/>
</svg>

);
