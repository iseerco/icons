import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banjo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.051,6l2.949-2.942-3.051-3.058-2.949,2.942v1.644l-5.097,5.097c-1.355-1.054-3.057-1.683-4.903-1.683C3.589,8,0,11.589,0,16s3.589,8,8,8,8-3.589,8-8c0-1.846-.629-3.548-1.683-4.903l5.097-5.097h1.637Zm-13.465,14.414l-4-4,1.414-1.414,4,4-1.414,1.414Z"/></svg>

);
