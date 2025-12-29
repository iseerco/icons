import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerCross = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.033,12.553,10.586,10,8.033,7.447,9.447,6.033,12,8.586l2.553-2.553,1.414,1.414L13.414,10l2.553,2.553-1.414,1.414L12,11.414,9.447,13.967Zm-3.1,4.526A10,10,0,1,1,19.071,2.929a10,10,0,0,1,0,14.142L12,23.987ZM4,10a7.948,7.948,0,0,0,2.343,5.657L12,21.189l5.665-5.54A8,8,0,1,0,4,10Z"/></svg>

);
