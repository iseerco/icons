import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVideoCameraAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.125l-3,3v-1.625c0-1.93-1.57-3.5-3.5-3.5H3.5c-1.93,0-3.5,1.57-3.5,3.5v14.5H21v-5.125l3,3V5.125Zm-6,12.875H3V6.5c0-.275,.224-.5,.5-.5h14c.275,0,.5,.225,.5,.5v11.5Z"/></svg>

);
