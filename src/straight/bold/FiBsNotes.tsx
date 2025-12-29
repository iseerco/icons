import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNotes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0h-12c-1.93,0-3.5,1.57-3.5,3.5v15.5h14.167l4.833-4.833V3.5c0-1.93-1.57-3.5-3.5-3.5Zm-12.5,3.5c0-.275.224-.5.5-.5h12c.275,0,.5.225.5.5v8.5h-4v4h-9V3.5ZM3,21h14.121l-3,3H0v-13c0-1.758,1.308-3.204,3-3.449v13.449Z"/></svg>

);
