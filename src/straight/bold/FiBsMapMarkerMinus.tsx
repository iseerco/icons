import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMapMarkerMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,23.987l7.071-6.916a10.009,10.009,0,0,0,0-14.142h0A10,10,0,1,0,4.941,17.083ZM7.051,5.05a7,7,0,0,1,9.911,9.888L12,19.791,7.05,14.95a7,7,0,0,1,0-9.9ZM16,11.5H8v-3h8Z"/></svg>

);
