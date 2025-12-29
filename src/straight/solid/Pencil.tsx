import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pencil = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="14.604 5.687 0 20.29 0 24 3.71 24 18.313 9.396 14.604 5.687"/><path d="M23.232.768a2.624,2.624,0,0,0-3.71,0l-3.5,3.505,3.709,3.709,3.5-3.5A2.624,2.624,0,0,0,23.232.768Z"/></svg>

);
