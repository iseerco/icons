import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.904,1.241C13.559.47,12.846.01,12,.01s-1.559.461-1.906,1.235L0,24h24L13.904,1.241Zm5.453,14.759H4.642l2.662-6h9.392l2.662,6ZM11.007,1.652c.183-.408.545-.642.993-.642s.81.233.991.638l3.261,7.352H7.748l3.26-7.348Zm-6.809,15.348h15.603l2.662,6H1.537l2.662-6Z"/>
</svg>

);
