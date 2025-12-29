import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,0C6.665-.189,1.6,8.253,5.139,14.618L.879,18.879a3,3,0,0,0,4.242,4.242l4.261-4.26C15.748,22.4,24.189,17.336,24,10A10.011,10.011,0,0,0,14,0Zm0,17C4.749,16.7,4.751,3.294,14,3a1,1,0,0,1,0,2c-6.607.21-6.607,9.791,0,10a5.006,5.006,0,0,0,5-5,1,1,0,0,1,2,0A7.009,7.009,0,0,1,14,17Z"/></svg>

);
