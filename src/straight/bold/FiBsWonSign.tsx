import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWonSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,0h-3.05s-2.03,12-2.03,12h-4.32l-2.6-8-2.6,8H5.08L3.04,0H0L2.04,12H0v3H2.55l1.11,6.54c.32,1.47,1.48,2.46,2.87,2.46s2.44-.83,2.87-2.23l2.27-6.77h.67l2.29,6.84c.32,1.29,1.46,2.16,2.85,2.16s2.54-.99,2.87-2.48l1.11-6.52h2.55v-3h-2.04L24,0ZM6.56,20.75l-.98-5.75h2.84l-1.87,5.75Zm10.88-.01l-1.87-5.74h2.84l-.97,5.74Z"/></svg>

);
