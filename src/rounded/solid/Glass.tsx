import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Glass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.469,1.027A3,3,0,0,0,19.209,0H4.791A3,3,0,0,0,1.819,3.405L2.309,7H16.1a1,1,0,0,1,0,2H2.582L4.038,19.675A5.017,5.017,0,0,0,8.992,24h6.016a5.017,5.017,0,0,0,4.954-4.324L22.181,3.405A3,3,0,0,0,21.469,1.027Z"/></svg>

);
