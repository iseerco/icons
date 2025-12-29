import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.011,21L13.511,0h-3.009L1.709,21H0v3h24v-3h-1.989Zm-5.665-6H7.474l1.256-3h6.402l1.214,3Zm-4.361-10.774l1.932,4.774h-3.932l1.999-4.774Zm-5.768,13.774h11.343l1.214,3H4.961l1.256-3Z"/>
</svg>

);
