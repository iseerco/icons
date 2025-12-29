import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const P = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,24H2V3C2,1.346,3.346,0,5,0H14.5c4.136,0,7.5,3.364,7.5,7.5s-3.364,7.5-7.5,7.5H4v9Zm0-11H14.5c3.033,0,5.5-2.468,5.5-5.5s-2.467-5.5-5.5-5.5H5c-.551,0-1,.448-1,1V13Z"/></svg>

);
