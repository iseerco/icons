import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Raygun = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2.138,15.273c1.654,1.05,3.615,1.848,5.535,2.429l-1.673,6.297H0l.041-1.629,2.097-7.098Zm17.862-7.273V3h-2v5h-2V1h-1c-1.35,0-3.897.374-6.514,1.149C6.15.47,3.727,0,0,0c0,0,2.216,1.794,2.474,4.927C.991,6.036,0,7.388,0,9c0,5.506,11.506,8,15,8h1v-7h2v5h2v-5c2.417,1.185,4,3,4,3V5s-1.583,1.815-4,3Z"/></svg>

);
