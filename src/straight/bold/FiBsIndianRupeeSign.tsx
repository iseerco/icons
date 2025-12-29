import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsIndianRupeeSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.74,3c.48,.6,.88,1.27,1.18,2h4.08v3h-3.5c0,4.41-3.59,8-8,8h-.83l9.57,8h-4.69L3,15.23v-2.23h6.5c2.76,0,5-2.24,5-5H3v-3H13.5c-.91-1.21-2.37-2-4-2H3V0H21V3h-5.26Z"/></svg>

);
