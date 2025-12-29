import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLiraSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,13c0,4.561-3.654,8-8.5,8h-1.5v-6.716l8-2.195v-3.089l-8,2.195v-2.115l8-2.195V3.796l-8,2.195V0h-3V6.814l-4,1.097v3.089l4-1.097v2.115l-4,1.097v3.089l4-1.097v8.893h4.5c6.449,0,11.5-4.832,11.5-11h-3Z"/></svg>

);
