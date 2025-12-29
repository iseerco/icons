import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChartPie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm3.621,13.5h5.244a8.947,8.947,0,0,1-1.537,3.706Zm5.244-3H13.5V3.135A9.014,9.014,0,0,1,20.865,10.5ZM3,12a9.009,9.009,0,0,1,7.5-8.865v9.486l6.706,6.707A8.986,8.986,0,0,1,3,12Z"/></svg>

);
