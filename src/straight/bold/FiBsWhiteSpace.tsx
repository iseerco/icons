import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWhiteSpace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M3,0V24H0V0H3ZM21.038,0V24h3V0h-3Zm-5.038,7v3.5H8v-3.5L3.371,11.236c-.247,.222-.371,.526-.371,.83s.124,.609,.371,.83l4.629,4.236v-3.632h8v3.632l4.629-4.236c.494-.443,.494-1.217,0-1.66l-4.629-4.236Z"/>
</svg>

);
