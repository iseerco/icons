import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsW = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.943,0l-3.665,20.914-5.278-12.05-5.31,12.133L3.054,0H0L3.744,21.56c.24,1.26,1.214,2.202,2.48,2.401,.164,.025,.326,.039,.486,.038,1.099,0,2.088-.604,2.671-1.68l2.621-5.981,2.677,6.101c.604,1.104,1.843,1.724,3.098,1.522,1.267-.199,2.24-1.142,2.48-2.4L24,0h-3.057Z"/></svg>

);
