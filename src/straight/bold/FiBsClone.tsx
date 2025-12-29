import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0h-9c-1.93,0-3.5,1.57-3.5,3.5v12.5h16V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,13h-10V3.5c0-.276.225-.5.5-.5h9c.275,0,.5.224.5.5v9.5Zm-8,5h3v6H0v-12.5c0-1.93,1.57-3.5,3.5-3.5h2.5v3h-2.5c-.275,0-.5.224-.5.5v9.5h10v-3Z"/></svg>

);
