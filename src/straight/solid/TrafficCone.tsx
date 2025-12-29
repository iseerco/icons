import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6.328,11h11.201l1.581,4H4.691l1.637-4Zm10.41-2L13.18,0h-2.351l-3.683,9h9.592Zm3.163,8H3.872l-2.046,5H0v2h24v-2h-2.123l-1.977-5Z"/>
</svg>

);
