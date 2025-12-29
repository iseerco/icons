import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTrendDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9v5.586L13,5.586l-6,6L1.444,6.03,.03,7.444l6.97,6.97,6-6,7.586,7.586h-5.586v2h7c1.103,0,2-.897,2-2v-7h-2Z"/></svg>

);
