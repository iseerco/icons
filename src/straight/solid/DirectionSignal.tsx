import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DirectionSignal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.414,14.5l-3.5-3.5h-6.914v-2h9V2h-9.007l.007-1.996-2-.008-.008,2.004h-6.907L.586,5.5l3.5,3.5h6.914v2H2v7h8.99l.01,6.001,2-.003-.01-5.999h6.924l3.5-3.5Z"/>
</svg>

);
