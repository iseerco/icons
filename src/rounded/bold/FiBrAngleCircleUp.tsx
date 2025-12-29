import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngleCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M12,0A12,12,0,1,1,0,12,12.013,12.013,0,0,1,12,0Zm0,21a9,9,0,1,0-9-9A9.01,9.01,0,0,0,12,21Z"/><path d="M12,7.992a3.491,3.491,0,0,1,2.45.991l3.1,3.05a1.5,1.5,0,1,1-2.1,2.139l-3.1-3.043a.505.505,0,0,0-.7,0l-3.1,3.044a1.5,1.5,0,1,1-2.1-2.139l3.1-3.052A3.494,3.494,0,0,1,12,7.992Z"/></g></svg>

);
