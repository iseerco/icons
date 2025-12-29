import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowTurnLeftUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,22c-.551,0-1-.449-1-1V2.952l5.795,5.758,1.409-1.419L10.486,.616c-.819-.819-2.153-.82-2.97-.002L.795,7.291l1.409,1.419L8,2.952V21c0,1.654,1.346,3,3,3h11v-2H11Z"/>
</svg>

);
