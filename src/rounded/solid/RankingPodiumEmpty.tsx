import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RankingPodiumEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.5,21.019h-1.5c-1.381,0-2.5-1.119-2.5-2.5v-5c0-1.381,1.119-2.5,2.5-2.5h1.5c1.381,0,2.5,1.119,2.5,2.5v5c0,1.381-1.119,2.5-2.5,2.5ZM4,9.019h-1.5c-1.381,0-2.5,1.119-2.5,2.5v7c0,1.381,1.119,2.5,2.5,2.5h1.5c1.381,0,2.5-1.119,2.5-2.5v-7c0-1.381-1.119-2.5-2.5-2.5ZM13,3.019h-2c-1.381,0-2.5,1.119-2.5,2.5v13c0,1.381,1.119,2.5,2.5,2.5h2c1.381,0,2.5-1.119,2.5-2.5V5.519c0-1.381-1.119-2.5-2.5-2.5Z"/>
</svg>

);
