import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckFlatbed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m7.942,20c.034.162.058.328.058.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172.024-.338.058-.5h4.885Zm9.115,0c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h-4.885Zm3.663-10l-1.316-3.949c-.409-1.227-1.553-2.051-2.846-2.051h-3.559v6h7.72Zm.28,2h-8v4H0v2h24v-3c0-1.654-1.346-3-3-3Z"/>
</svg>

);
