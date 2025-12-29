import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Up = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.99,24H6.99V11H.06L9.86,.88C10.43,.31,11.18,0,11.99,0h0c.8,0,1.56,.31,2.13,.88l9.82,10.12h-6.95v13Z"/></svg>

);
