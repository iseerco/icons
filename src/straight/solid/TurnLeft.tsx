import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TurnLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,11v11h-2v-11c0-.551-.448-1-1-1H2.951l5.758,5.795-1.418,1.409L.614,10.484c-.396-.394-.614-.922-.614-1.484s.219-1.09.616-1.487L7.291.795l1.418,1.409-5.758,5.795h18.049c1.654,0,3,1.346,3,3Z"/>
</svg>

);
