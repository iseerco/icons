import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCoffeeMaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,13v-3h-5v-2h3V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H22v-3h-4.253c1.797,0,3.253-1.457,3.253-3.253v-2.747H12v2.747c0,1.797,1.457,3.253,3.253,3.253h-5.253V8h4v5h10ZM7,5V21H3V3.5c0-.276,.224-.5,.5-.5h15c.276,0,.5,.224,.5,.5v1.5H7Z"/>
</svg>

);
