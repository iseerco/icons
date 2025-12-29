import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTs3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.125,10.332c1.711-.933,2.875-2.749,2.875-4.832,0-3.033-2.468-5.5-5.5-5.5H4V1H12.5c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5H6v1h7c3.309,0,6,2.691,6,6s-2.691,6-6,6H4v1H13c3.859,0,7-3.14,7-7,0-3.119-2.052-5.766-4.875-6.668Z"/></svg>

);
