import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,13v-2h-2v2h-5V4.5c0-1.378,1.121-2.5,2.5-2.5s2.5,1.122,2.5,2.5v1.5h2v-1.5c0-2.481-2.019-4.5-4.5-4.5s-4.5,2.019-4.5,4.5v8.5h-5v-2h-2v2H0v3.5c0,4.411,3.589,8,8,8h8c4.411,0,8-3.589,8-8v-3.5h-4Z"/>
</svg>

);
