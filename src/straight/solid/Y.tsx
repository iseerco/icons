import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Y = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="22.041 0 19.559 0 12 10.308 4.441 0 1.959 0 11 12.328 11 24 13 24 13 12.328 22.041 0"/></svg>

);
