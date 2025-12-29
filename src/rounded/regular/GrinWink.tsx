import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,10c0,1-.895,1-2,1s-2,0-2-1a2,2,0,0,1,4,0ZM7,11h3a1,1,0,0,0,0-2H7A1,1,0,0,0,7,11Zm17,1A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-2,0A10.011,10.011,0,0,0,12,2c-13.248.5-13.245,19.5,0,20A10.011,10.011,0,0,0,22,12Zm-5.211,2.024A15.4,15.4,0,0,1,12,15,15.4,15.4,0,0,1,7.2,14.024a1,1,0,0,0-1.052,1.518A6.836,6.836,0,0,0,12,19a6.827,6.827,0,0,0,5.842-3.458A1,1,0,0,0,16.789,14.024Z"/></svg>

);
