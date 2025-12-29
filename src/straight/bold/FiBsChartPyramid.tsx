import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.905,1.243a2.088,2.088,0,0,0-3.81,0L0,24H24ZM12,4.346,15.4,12H8.605ZM7.274,15h9.452l2.661,6H4.613Z"/></svg>

);
