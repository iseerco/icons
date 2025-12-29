import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowTrendDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8v7.5c0,1.379-1.121,2.5-2.5,2.5h-7.5v-3h4.879l-5.879-5.879-6,6L.064,8.186l2.121-2.121,4.814,4.814,6-6,8,8v-4.879h3Z"/></svg>

);
