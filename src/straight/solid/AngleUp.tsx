import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.586,18.148,12.707,8.269a1.021,1.021,0,0,0-1.414,0L1.42,18.142.006,16.728,9.879,6.855a3.073,3.073,0,0,1,4.243,0L24,16.734Z"/></svg>

);
