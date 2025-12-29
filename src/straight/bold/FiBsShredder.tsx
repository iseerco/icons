import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShredder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,6h-1.5V0H5V6h-1.5c-1.93,0-3.5,1.57-3.5,3.5v6.5H24v-6.5c0-1.93-1.57-3.5-3.5-3.5ZM8,3h8v3H8V3Zm13,10H3v-3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5v3.5ZM3,18h3v6H3v-6Zm5,0h3v6h-3v-6Zm5,0h3v6h-3v-6Zm5,0h3v6h-3v-6Z"/></svg>

);
