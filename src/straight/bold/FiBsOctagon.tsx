import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsOctagon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.02,24H7.08L.05,16.97V7.03L7.08,0h9.94l7.03,7.03v9.94l-7.03,7.03Zm-8.7-3h7.46l5.27-5.27v-7.46L15.78,3h-7.46L3.05,8.27v7.46l5.27,5.27Z"/></svg>

);
