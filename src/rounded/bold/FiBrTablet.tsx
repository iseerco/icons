import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTablet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,0h-9A5.506,5.506,0,0,0,2,5.5v13A5.506,5.506,0,0,0,7.5,24h9A5.506,5.506,0,0,0,22,18.5V5.5A5.506,5.506,0,0,0,16.5,0ZM19,18H13v1a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V18H5V5.5A2.5,2.5,0,0,1,7.5,3h9A2.5,2.5,0,0,1,19,5.5Z"/></svg>

);
