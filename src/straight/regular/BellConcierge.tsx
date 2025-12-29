import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BellConcierge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,18v-4c0-6.28-4.849-11.448-11-11.958V0h-2v2.042C4.849,2.552,0,7.72,0,14v4h11v2H0v2h24v-2h-11v-2h11ZM2,14c0-5.514,4.486-10,10-10s10,4.486,10,10v2H2v-2Z"/></svg>

);
