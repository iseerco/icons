import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartWaterfall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H3.5c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.28,.22,.5,.5,.5H24v3ZM24,0h-3V17h3V0Zm-5,4h-3v6h3V4Zm-5,4h-3v6h3v-6Zm-5,4h-3v6h3v-6Z"/></svg>

);
