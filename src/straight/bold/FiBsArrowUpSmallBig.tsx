import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUpSmallBig = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.27,.73l4.25,4.25-2.12,2.12-2.4-2.4V24h-3V4.67l-2.45,2.4L.45,4.93,4.74,.72c.96-.96,2.55-.96,3.52,.01Zm5.73,22.27h10V13H14v10ZM16,1V9h8V1h-8Z"/></svg>

);
