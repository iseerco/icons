import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckRamp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,16V5a3,3,0,0,1,3-3,1,1,0,0,0,0-2,5.006,5.006,0,0,0-5,5V16.279L.684,22.051a1,1,0,0,0,.632,1.9l14.807-4.936A4.017,4.017,0,0,0,20,24C25.274,23.862,25.274,16.137,20,16Zm0,6a2,2,0,0,1,0-4A2,2,0,0,1,20,22Z"/></svg>

);
