import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrEnvelopeDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,15.5v3A5.506,5.506,0,0,1,18.5,24H5.5A5.506,5.506,0,0,1,0,18.5V8.5A5.506,5.506,0,0,1,5.5,3h8a1.5,1.5,0,0,1,0,3h-8A2.493,2.493,0,0,0,3.3,7.336l6.931,6.932a2.562,2.562,0,0,0,3.536,0,1.5,1.5,0,0,1,2.121,2.121,5.525,5.525,0,0,1-7.778,0L3,11.277V18.5A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5v-3A1.5,1.5,0,0,1,24,15.5ZM14.824,8A1.162,1.162,0,0,0,14,9.984l3.676,3.676a1.164,1.164,0,0,0,1.644,0L23,9.984A1.162,1.162,0,0,0,22.176,8H20V1.5a1.5,1.5,0,0,0-3,0V8Z"/></svg>

);
