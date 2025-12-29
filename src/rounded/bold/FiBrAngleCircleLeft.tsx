import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngleCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm21,0a9,9,0,1,0-9,9A9.01,9.01,0,0,0,21,12Z"/><path d="M7.992,12a3.491,3.491,0,0,1,.991-2.45l3.05-3.1a1.5,1.5,0,1,1,2.139,2.1l-3.043,3.1a.505.505,0,0,0,0,.705l3.044,3.1a1.5,1.5,0,1,1-2.139,2.1l-3.052-3.1A3.494,3.494,0,0,1,7.992,12Z"/></g></svg>

);
