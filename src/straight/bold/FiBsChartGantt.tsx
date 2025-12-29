import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartGantt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H3.5c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.28,.22,.5,.5,.5H24v3Zm0-9h-6v3h6v-3Zm-4-6H10v3h10v-3ZM13,3H6v3h7V3Z"/></svg>

);
