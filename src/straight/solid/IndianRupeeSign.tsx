import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndianRupeeSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.59,2c1.13,1.05,1.93,2.44,2.25,4h4.15v2h-4.03c-.26,3.9-3.51,7-7.47,7h-3.3l10.76,9h-3.13L3,15v-2h6.5c2.86,0,5.22-2.2,5.47-5H3v-2H14.79c-.66-2.3-2.77-4-5.29-4H3V0H21V2h-6.41Z"/></svg>

);
