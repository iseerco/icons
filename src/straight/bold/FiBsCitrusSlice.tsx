import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCitrusSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.077,1.14l-1.061-1.061L.079,19.017l1.061,1.061c2.529,2.529,5.892,3.922,9.469,3.922s6.939-1.393,9.469-3.922,3.923-5.893,3.923-9.469-1.394-6.94-3.923-9.469Zm-8.077,12.982l4.82,4.82c-1.415,1.06-3.066,1.733-4.82,1.966v-6.786Zm2.121-2.121h6.786c-.233,1.754-.907,3.405-1.967,4.82l-4.82-4.82Zm6.756-3h-6.538l4.603-4.603c1.016,1.357,1.677,2.93,1.935,4.603Zm-11.877,5.338v6.538c-1.673-.258-3.246-.919-4.603-1.935l4.603-4.603Z"/>
</svg>

);
