import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,3H13V0H11V3H8.5A4.505,4.505,0,0,0,4,7.5V16a8,8,0,0,0,16,0V7.5A4.505,4.505,0,0,0,15.5,3ZM13,11H11V7h2Z"/></svg>

);
