import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFloorLayer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,.267L0,6.021v3.889l12.002,5.755,11.998-5.793v-3.851L12,.267Zm7.031,6.698l-7.031,3.371-7.031-3.371,7.031-3.371,7.031,3.371Zm-7.031,11.982l12-5.754v4.984l-12,5.754L0,18.177v-4.984l12,5.754Z"/>
</svg>

);
