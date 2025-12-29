import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stocking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,0H7s0,1.999,0,1.999h2v7.291l-4.253,1.492C1.188,11.895-.802,15.694.31,19.254c.887,2.839,3.479,4.746,6.451,4.746.685,0,1.364-.104,2.041-.317l8.441-2.856c2.846-.962,4.757-3.626,4.757-6.63V2.001h2S24,0,24,0Z"/></svg>

);
