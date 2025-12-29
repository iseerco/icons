import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const T = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3c-1.308,.005-1.307,1.995,0,2H11V23c.005,1.308,1.995,1.307,2,0V2h8c1.308-.005,1.307-1.995,0-2Z"/></svg>

);
