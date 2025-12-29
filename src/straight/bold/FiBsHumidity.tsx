import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHumidity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,11.5A1.5,1.5,0,1,1,8.5,10,1.5,1.5,0,0,1,10,11.5ZM15.5,15A1.5,1.5,0,1,0,17,16.5,1.5,1.5,0,0,0,15.5,15ZM8,18h3.2L16,10H12.8Zm11.071,3.071h0a10.015,10.015,0,0,0-.012-14.154L12,.013,4.929,6.929A10,10,0,1,0,19.071,21.071ZM16.95,9.05a7,7,0,1,1-9.912.012L12,4.209Z"/></svg>

);
