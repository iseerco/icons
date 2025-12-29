import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Plate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.63,15.908,23.373,15.9,24,0A12.013,12.013,0,0,0,12,0Zm0,21C.077,20.548.08,3.451,12,3a1,1,0,0,1,0,2,7.008,7.008,0,0,0-7,7c.294,9.251,13.707,9.249,14,0a1,1,0,0,1,2,0A9.01,9.01,0,0,1,12,21Z"/></svg>

);
