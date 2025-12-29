import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMountain = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12-.101L0,21.613v2.387h24v-2.387L12-.101ZM3.767,21l4.607-8.336,2.127,2.836,2.5-3.5,1.817,2.5.953-1.576,4.463,8.076H3.767Z"/>
</svg>

);
