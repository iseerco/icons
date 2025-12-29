import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,24H2V3.5C2,1.57,3.57,0,5.5,0H14c4.411,0,8,3.589,8,8s-3.589,8-8,8H5v8Zm0-11H14c2.757,0,5-2.243,5-5s-2.243-5-5-5H5.5c-.276,0-.5,.225-.5,.5V13Z"/></svg>

);
