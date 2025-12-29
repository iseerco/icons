import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.071,2.936C17.182,1.046,14.671,.006,12,.006S6.818,1.046,4.929,2.936c-3.898,3.899-3.898,10.243,.008,14.15l7.063,6.908,7.071-6.916c3.898-3.899,3.898-10.243,0-14.142Zm-7.165,10.484c-.387,.387-.896,.58-1.407,.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"/></svg>

);
