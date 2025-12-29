import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsI = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="19 3 19 0 5 0 5 3 10.5 3 10.5 21 5 21 5 24 19 24 19 21 13.5 21 13.5 3 19 3"/></svg>

);
