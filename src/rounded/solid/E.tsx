import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const E = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,22H7c-1.654,0-3-1.346-3-3v-6h13c.553,0,1-.448,1-1s-.447-1-1-1H4V5c0-1.654,1.346-3,3-3h14c.553,0,1-.448,1-1s-.447-1-1-1H7C4.243,0,2,2.243,2,5v14c0,2.757,2.243,5,5,5h14c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>

);
