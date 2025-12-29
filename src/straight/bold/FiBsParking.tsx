import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsParking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,0H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.276,.225-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5V21ZM13,5h-2.5c-1.93,0-3.5,1.57-3.5,3.5v10.5h3v-4h3c2.757,0,5-2.243,5-5s-2.243-5-5-5Zm0,7h-3v-3.5c0-.276,.225-.5,.5-.5h2.5c1.103,0,2,.897,2,2s-.897,2-2,2Z"/></svg>

);
