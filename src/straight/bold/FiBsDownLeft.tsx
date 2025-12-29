import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.95,23H4.4s0,0,0,0c-.91,0-1.76-.35-2.4-1-.64-.64-1-1.5-.99-2.41V5.06s5.48,5.33,5.48,5.33L16.17,.7l7.12,7.12-9.69,9.69,5.34,5.49Zm-14.55-3h7.43s-2.45-2.51-2.45-2.51L19.05,7.82l-2.88-2.88L6.51,14.61l-2.51-2.44v7.43c0,.14,.07,.23,.12,.29,.05,.05,.15,.12,.28,.12h0Z"/></svg>

);
