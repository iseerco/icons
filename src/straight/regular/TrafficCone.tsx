import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.877,22L13.18,0h-2.351L1.826,22H0v2h24v-2h-2.123Zm-4.522-6H6.443l1.637-4h7.694l1.582,4ZM11.992,2.437l2.991,7.563h-6.085l3.095-7.563Zm-6.368,15.563h12.522l1.582,4H3.988l1.637-4Z"/>
</svg>

);
