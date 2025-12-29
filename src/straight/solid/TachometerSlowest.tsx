import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerSlowest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,13a12.019,12.019,0,0,0,5.112,9.818l.639.449L8,20h8l2.249,3.267.639-.449C28.417,16.166,23.622.98,12,1A12.013,12.013,0,0,0,0,13Zm12.8,1.831a1.992,1.992,0,0,1-1.98-.223L4.16,17.532l-.8-1.831,6.664-2.924A2,2,0,1,1,12.8,14.831Z"/></svg>

);
