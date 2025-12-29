import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGraphCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4.175,21h19.825v3H0V0h3v15.144c3.143-5.943,9.656-10.144,17-10.144v-3l3.696,3.793c.405.391.405,1.024,0,1.414l-3.696,3.793v-3c-7.802,0-14.708,5.878-15.825,13Z"/>
</svg>

);
