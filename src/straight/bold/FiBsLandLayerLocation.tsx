import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLandLayerLocation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.242,1.757c-1.134-1.133-2.641-1.757-4.242-1.757s-3.11.624-4.242,1.757c-1.134,1.133-1.758,2.64-1.758,4.243s.624,3.11,1.77,4.254l4.23,4.138,4.242-4.149c1.134-1.133,1.758-2.64,1.758-4.243s-.624-3.11-1.758-4.243Zm-4.242,6.243c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm12,7.701v1.099l-12,7.2L0,16.8v-1.099l6.494-3.897,2.217,2.169-3.796,2.277,7.084,4.25,7.084-4.25-3.796-2.277,2.217-2.168,6.494,3.896Z"/>
</svg>

);
