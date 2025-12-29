import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGasPump = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.879,1,18,4.879V18H16V3.5A3.5,3.5,0,0,0,12.5,0h-9A3.5,3.5,0,0,0,0,3.5V24H16V21h5V6.121l3-3ZM3.5,3h9a.5.5,0,0,1,.5.5V9H10.816a2.988,2.988,0,0,0-.383-.743L12.2,5.9,9.8,4.1,7.594,7.041A2.984,2.984,0,0,0,5.184,9H3V3.5A.5.5,0,0,1,3.5,3ZM3,21V12H13v9Z"/></svg>

);
