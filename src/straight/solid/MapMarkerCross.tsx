import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.071,2.929A10,10,0,1,0,4.937,17.079L12,23.987l7.071-6.916a10,10,0,0,0,0-14.142Zm-3.1,9.624-1.414,1.414L12,11.414,9.447,13.967,8.033,12.553,10.586,10,8.033,7.447,9.447,6.033,12,8.586l2.553-2.553,1.414,1.414L13.414,10Z"/></svg>

);
