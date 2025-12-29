import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReferralAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.664,11.497l-3.94,3.503,3.94,3.503-1.328,1.494-4.497-3.997h-1.838v-2h1.838l4.497-3.997,1.328,1.494Zm-13.164-.497c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm1.5,1h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Zm15.5-7c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm1.5,1h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Zm1,10.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Zm-1,3.5h-3c-1.103,0-2,.897-2,2v2h7v-2c0-1.103-.897-2-2-2Z"/>
</svg>

);
