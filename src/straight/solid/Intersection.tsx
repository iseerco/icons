import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Intersection = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,24h-2v-14c0-4.411-3.589-8-8-8S4,5.589,4,10v14h-2v-14C2,4.486,6.486,0,12,0s10,4.486,10,10v14Z"/>
</svg>

);
