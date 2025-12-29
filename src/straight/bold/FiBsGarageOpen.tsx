import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGarageOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.693,7.447,14.1.723a3.407,3.407,0,0,0-4.2,0L1.307,7.447A3.4,3.4,0,0,0,0,10.132V24H8V15h8v9h8V10.132A3.4,3.4,0,0,0,22.693,7.447ZM21,21H19V13a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v8H3V10.132a.407.407,0,0,1,.157-.322l8.59-6.722a.411.411,0,0,1,.505,0l8.59,6.722a.408.408,0,0,1,.158.323Z"/></svg>

);
