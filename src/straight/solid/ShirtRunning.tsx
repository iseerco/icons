import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShirtRunning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m3,21.561v-12.524l.667-.236c1.396-.494,2.333-1.82,2.333-3.301V0h2v4c0,2.206,1.794,4,4,4s4-1.794,4-4V0h2v5.5c0,1.481.937,2.808,2.333,3.301l.632.223L3,21.561Zm0,2.439h18v-12.561L3,24Z"/>
</svg>

);
