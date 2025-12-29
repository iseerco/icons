import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.846,7.404l1.546-2.561c1.887,1.256,3.509,2.878,4.765,4.765l-2.65,1.439c-.962-1.387-2.274-2.681-3.661-3.642Zm6.154,11.596h3c0-2.401-.507-4.684-1.409-6.757l-2.648,1.437c.677,1.642,1.056,3.436,1.056,5.32Zm-15.994,2.036L13.671,1.453,11.037.018.371,19.601c-.507.932-.487,2.031.055,2.943.542.912,1.498,1.456,2.559,1.456h21.015v-3l-20.994.036Z"/>
</svg>

);
