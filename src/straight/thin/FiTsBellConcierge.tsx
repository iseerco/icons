import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBellConcierge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,18v-3c0-6.449-5.114-11.726-11.5-11.989V0h-1v3.011C5.114,3.274,0,8.551,0,15v3h11.5v3H0v1h24v-1h-11.5v-3h11.5ZM1,15c0-6.065,4.935-11,11-11s11,4.935,11,11v2H1v-2Z"/></svg>

);
