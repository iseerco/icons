import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.071,2.929A10,10,0,1,0,4.937,17.079L12,23.987l7.071-6.916a10,10,0,0,0,0-14.142ZM16,11H13v3H11V11H8V9h3V6h2V9h3Z"/></svg>

);
