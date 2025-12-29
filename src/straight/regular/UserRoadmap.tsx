import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserRoadmap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20,10h-2V0h2l4,2.5-4,2.5v5Zm0,4h-7c-1.103,0-2-.897-2-2s.897-2,2-2h3v-2h-3c-2.206,0-4,1.794-4,4s1.794,4,4,4h7c1.103,0,2,.897,2,2s-.897,2-2,2H10v2h10c2.206,0,4-1.794,4-4s-1.794-4-4-4ZM4,19c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm2,1H2c-1.103,0-2,.897-2,2v2H2v-2H6v2h2v-2c0-1.103-.897-2-2-2Z"/>
</svg>

);
