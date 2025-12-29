import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,7c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,7c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Zm7.542,6c2.128-2.007,3.458-4.851,3.458-8,0-6.065-4.935-11-11-11S0,5.935,0,12s4.935,11,11,11h13v-3h-5.458ZM3,12c0-4.411,3.589-8,8-8s8,3.589,8,8-3.589,8-8,8S3,16.411,3,12Z"/>
</svg>

);
