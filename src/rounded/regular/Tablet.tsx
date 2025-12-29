import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,17,0ZM7,2H17a3,3,0,0,1,3,3V17H4V5A3,3,0,0,1,7,2ZM17,22H7a3,3,0,0,1-3-3h7v1a1,1,0,0,0,2,0V19h7A3,3,0,0,1,17,22Z"/></svg>

);
