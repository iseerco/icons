import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,24H4.842c-1.153,0-2.183-.688-2.624-1.753s-.199-2.279,.616-3.094L18.773,3H2V0H19.158c1.153,0,2.183,.688,2.624,1.753s.199,2.279-.616,3.094L5.227,21H22v3Zm-17.037-2.733h0ZM19.037,2.732h0Z"/></svg>

);
