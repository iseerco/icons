import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,11H8V9h8ZM4.937,17.079a10,10,0,1,1,14.134-.008L12,23.987ZM4,10a7.948,7.948,0,0,0,2.343,5.657L12,21.189l5.665-5.54A8,8,0,1,0,4,10Z"/></svg>

);
