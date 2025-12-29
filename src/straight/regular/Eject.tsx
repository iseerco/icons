import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Eject = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,1.817L.044,18h23.913L12,1.817Zm0,3.365l7.992,10.817H4.008l7.992-10.817Zm12,14.817v2H0v-2h24Z"/></svg>

);
