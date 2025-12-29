import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCameraSecurity = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,3.5c0-1.93-1.57-3.5-3.5-3.5H5.5c-1.93,0-3.5,1.57-3.5,3.5v16.5h4.255c-.791,1.134-1.255,2.513-1.255,4h14c0-1.487-.464-2.866-1.255-4h4.255V3.5Zm-3,13.5H5V3.5c0-.276.224-.5.5-.5h13c.276,0,.5.224.5.5v13.5Zm-7-12c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,7c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z"/></svg>

);
