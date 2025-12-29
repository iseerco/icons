import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngleCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM3,12a9,9,0,1,0,9-9A9.01,9.01,0,0,0,3,12Z"/><path d="M16.008,12a3.491,3.491,0,0,1-.991,2.45l-3.05,3.1a1.5,1.5,0,1,1-2.139-2.1l3.043-3.1a.505.505,0,0,0,0-.7l-3.044-3.1a1.5,1.5,0,1,1,2.139-2.1l3.052,3.1A3.494,3.494,0,0,1,16.008,12Z"/></g></svg>

);
