import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Microchip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,15h-6v-6h6v6Zm7-8v2h2v2h-2v2h2v2h-2v2h2v2h-2c0,1.66-1.34,3-3,3v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2c-1.66,0-3-1.34-3-3H0v-2H2v-2H0v-2H2v-2H0v-2H2v-2H0v-2H2c0-1.66,1.34-3,3-3V0h2V2h2V0h2V2h2V0h2V2h2V0h2V2c1.66,0,3,1.34,3,3h2v2h-2Zm-5,0H7v10h10V7Z"/></svg>

);
