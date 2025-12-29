import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.427,16.935a1.5,1.5,0,0,0-2.121,0l-2.781,2.779L13.5,1.5A1.5,1.5,0,0,0,12,0h0a1.5,1.5,0,0,0-1.5,1.5l.023,18.2L7.76,16.935a1.5,1.5,0,0,0-2.121,2.121l3.919,3.919a3.5,3.5,0,0,0,4.949,0l3.92-3.919A1.5,1.5,0,0,0,18.427,16.935Z"/></svg>

);
