import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartCandlestick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23.96l-20.5,.04c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.28,.22,.5,.5,.5l20.5-.04v3Zm-6-7.96h3v-2h2V2h-2V0h-3V2h-2V14h2v2Zm-10,3h3v-3h2V3h-2V0h-3V3h-2v13h2v3Z"/></svg>

);
