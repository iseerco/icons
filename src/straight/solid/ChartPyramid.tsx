import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>08-Infographic-element</title><path d="M17.346,9,13.905,1.243a2.088,2.088,0,0,0-3.81,0L6.654,9Z"/><polygon points="20.451 16 18.233 11 5.767 11 3.549 16 20.451 16"/><polygon points="21.339 18 2.661 18 0 24 24 24 21.339 18"/></svg>

);
