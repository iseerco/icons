import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDoorClosed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,21V3.5c0-1.93-1.57-3.5-3.5-3.5H6.5c-1.93,0-3.5,1.57-3.5,3.5V21H0v3H24v-3h-3ZM6,3.5c0-.276,.225-.5,.5-.5h11c.275,0,.5,.224,.5,.5V21H6V3.5Zm10,9c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
