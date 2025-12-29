import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWindowMaximize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,1H3.5C1.57,1,0,2.57,0,4.5V23H24V4.5c0-1.93-1.57-3.5-3.5-3.5ZM3.5,4H20.5c.28,0,.5,.22,.5,.5v2.5H3v-2.5c0-.28,.22-.5,.5-.5Zm-.5,16V10H21v10H3Z"/></svg>

);
