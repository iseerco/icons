import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,24H0v-1.782l6.678-12.083c1.086-1.966,3.076-3.14,5.322-3.14s4.236,1.174,5.323,3.14l6.677,12.083v1.782Z"/>
</svg>

);
