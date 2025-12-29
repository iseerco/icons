import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVectorPolygon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,10.867l4.295-4.867h3.705V0h-6v2H6V0H0v6h2v12H0v6h6v-2h12v2h6v-6h-3.705l-4.295-4.867v-2.266Zm-11,7.133V6h1v-1h11.176l-3.529,4h-3.647v6h3.647l3.529,4H6v-1h-1Z"/>
</svg>

);
