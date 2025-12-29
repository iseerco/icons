import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.5,3H22V0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24h3V14h13v-3H5V3.5c0-.276,.224-.5,.5-.5Z"/></svg>

);
