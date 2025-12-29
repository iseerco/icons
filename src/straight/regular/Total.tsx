import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Total = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,24H2v-1.885l9.151-10.115L2,1.885V0h17c1.654,0,3,1.346,3,3v1.5h-2v-1.5c0-.551-.448-1-1-1H4.801l9.048,10-9.048,10h14.199c.552,0,1-.448,1-1v-1.5h2v1.5c0,1.654-1.346,3-3,3Z"/>
</svg>

);
