import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.621,21l-5.121-5.121V7.621l1.733-1.733c.246.065.5.112.767.112,1.657,0,3-1.343,3-3s-1.343-3-3-3-3,1.343-3,3c0,.267.046.521.112.767l-6.172,6.172,2.121,2.121,1.439-1.439v5.258l-5.121,5.121H0v3h24v-3h-5.379Zm-6.621-2.379l2.379,2.379h-4.758l2.379-2.379Z"/>
</svg>

);
