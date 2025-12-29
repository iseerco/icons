import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sigma = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,24H2v-1.9l9.619-10.1L2,1.9V0h17c1.654,0,3,1.346,3,3v2h-2v-2c0-.551-.448-1-1-1H4.857l9.523,10-9.523,10h14.143c.552,0,1-.449,1-1v-2h2v2c0,1.654-1.346,3-3,3Z"/></svg>

);
