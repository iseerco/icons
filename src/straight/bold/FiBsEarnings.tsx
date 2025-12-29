import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEarnings = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.546,0H13V3h5.879L0,21.879,2.121,24,21,5.121V11h3V2.454A2.457,2.457,0,0,0,21.546,0Z"/><path d="M6.5,11A4.5,4.5,0,1,0,2,6.5,4.505,4.505,0,0,0,6.5,11Zm0-6A1.5,1.5,0,1,1,5,6.5,1.5,1.5,0,0,1,6.5,5Z"/><path d="M17.5,13A4.5,4.5,0,1,0,22,17.5,4.505,4.505,0,0,0,17.5,13Zm0,6A1.5,1.5,0,1,1,19,17.5,1.5,1.5,0,0,1,17.5,19Z"/></svg>

);
