import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const H3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,4h2v16h-2v-7H2v7H0V4h2v7h8v-7Zm11.797,6.857c.742-.727,1.203-1.739,1.203-2.857,0-2.206-1.794-4-4-4h-5v2h5c1.103,0,2,.897,2,2s-.897,2-2,2h-3v2h3c1.654,0,3,1.346,3,3s-1.346,3-3,3h-5v2h5c2.757,0,5-2.243,5-5,0-1.722-.875-3.243-2.203-4.143Z"/></svg>

);
