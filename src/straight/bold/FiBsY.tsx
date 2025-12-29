import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="22.661 0 18.94 0 12 9.463 5.06 0 1.339 0 10.5 12.492 10.5 24 13.5 24 13.5 12.492 22.661 0"/></svg>

);
