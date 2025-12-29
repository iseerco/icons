import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartLineUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3.5,21H24v3H3.5c-1.93,0-3.5-1.57-3.5-3.5V0H3V20.5c0,.276,.224,.5,.5,.5ZM16,4v3h2.879l-4.379,4.379-4-4-5.561,5.561,2.121,2.121,3.439-3.439,4,4,6.5-6.5v2.879h3V4h-8Z"/></svg>

);
