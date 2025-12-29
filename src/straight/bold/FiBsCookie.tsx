import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCookie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="9.614" cy="9.591" r="2"/><circle cx="20" cy="2" r="2"/><circle cx="12" cy="16" r="2"/><path d="M12,23.978a12,12,0,0,1,0-24c.389,0,.771.02,1.15.057l1.231.12L14.5,1.386a9,9,0,0,0,8.093,8.093l1.235.117.116,1.235c.037.377.058.759.058,1.147A12.013,12.013,0,0,1,12,23.978Zm-.29-21A9,9,0,1,0,21,12.267,12.01,12.01,0,0,1,11.71,2.982Z"/></svg>

);
