import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerSlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,13a12.019,12.019,0,0,0,5.112,9.818l.639.449L8,20h8l2.249,3.267.639-.449C28.417,16.166,23.622.98,12,1A12.013,12.013,0,0,0,0,13Zm10.586,1.414a1.991,1.991,0,0,1-.511-1.925L4.929,7.343,6.343,5.929l5.146,5.146a2,2,0,1,1-.9,3.339Z"/></svg>

);
