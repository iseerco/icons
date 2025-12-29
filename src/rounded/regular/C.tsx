import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const C = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,24h-1c-5.514,0-10-4.486-10-10v-4C2,4.486,6.486,0,12,0h1c3.824,0,7.257,2.128,8.96,5.554,.246,.495,.044,1.095-.45,1.341-.497,.245-1.095,.044-1.341-.45-1.362-2.742-4.109-4.445-7.169-4.445h-1c-4.411,0-8,3.589-8,8v4c0,4.411,3.589,8,8,8h1c3.006,0,5.73-1.66,7.111-4.333,.253-.49,.856-.684,1.348-.429,.491,.253,.683,.856,.43,1.347-1.727,3.34-5.132,5.415-8.889,5.415Z"/></svg>

);
