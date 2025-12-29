import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Branching = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17.163,13c.434,1.441,1.757,2.5,3.337,2.5,1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-1.58,0-2.903,1.059-3.337,2.5h-4.163V6.5c0-1.103,.897-2,2-2h2.163c.434,1.441,1.757,2.5,3.337,2.5,1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-1.58,0-2.903,1.059-3.337,2.5h-2.163c-2.206,0-4,1.794-4,4v4.5H6.837c-.434-1.441-1.757-2.5-3.337-2.5-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c1.58,0,2.903-1.059,3.337-2.5h4.163v4.5c0,2.206,1.794,4,4,4h2.163c.434,1.441,1.757,2.5,3.337,2.5,1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5c-1.58,0-2.903,1.059-3.337,2.5h-2.163c-1.103,0-2-.897-2-2v-4.5h4.163Z"/>
</svg>

);
