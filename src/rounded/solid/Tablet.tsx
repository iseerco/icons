import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,20a1,1,0,0,1-2,0V19H2a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5H13Z"/><path d="M17,0H7A5.006,5.006,0,0,0,2,5V17H22V5A5.006,5.006,0,0,0,17,0Z"/></svg>

);
