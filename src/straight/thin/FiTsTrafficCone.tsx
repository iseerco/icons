import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTrafficCone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.842,23L12.966.317l-.125-.317h-1.682L2.157,23H0v1h24v-1h-2.158Zm-4.987-10H7.145l1.565-4h6.579l1.565,4Zm.391,1l1.565,4H5.188l1.565-4h10.492ZM11.841,1h.318l2.739,7h-5.797l2.739-7Zm-7.044,18h14.405l1.565,4H3.231l1.565-4Z"/>
</svg>

);
