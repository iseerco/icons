import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const X = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="13.241 12 22.041 0 19.559 0 12 10.308 4.441 0 1.959 0 10.759 12 1.959 24 4.441 24 12 13.692 19.559 24 22.041 24 13.241 12"/></svg>

);
