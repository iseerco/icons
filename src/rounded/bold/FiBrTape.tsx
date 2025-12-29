import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrTape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,12c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-7,0c0-1.103.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2Zm13.5,8h-3.958c2.128-2.007,3.458-4.851,3.458-8,0-6.065-4.935-11-11-11S0,5.935,0,12s4.935,11,11,11h11.5c.829,0,1.5-.672,1.5-1.5s-.671-1.5-1.5-1.5ZM3,12c0-4.411,3.589-8,8-8s8,3.589,8,8-3.589,8-8,8S3,16.411,3,12Z"/>
</svg>

);
