import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.312,24c-.893,0-1.736-.447-2.24-1.232L5,3.789V24H2V2.679C2,1.48,2.772,.448,3.923,.11c1.15-.336,2.358,.113,3.006,1.121l12.071,18.979V0h3V21.32c0,1.199-.773,2.231-1.924,2.569-.254,.074-.512,.11-.765,.11Z"/></svg>

);
