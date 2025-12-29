import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7.84,23.23L.77,16.16,10.96,5.97,6.02,.99h13.98s0,0,0,0c.8,0,1.55,.31,2.12,.88,.57,.57,.88,1.32,.88,2.13v13.96s-4.97-4.92-4.97-4.92L7.84,23.23Zm-4.24-7.07l4.24,4.24,10.19-10.19,2.98,2.95V4c0-.27-.11-.52-.3-.71-.19-.19-.44-.29-.71-.29H10.83s2.96,2.98,2.96,2.98L3.6,16.16Z"/></svg>

);
