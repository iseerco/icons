import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortShapesUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,10H14V1h9V10Zm-4.5,3.7l-5,9.3h10l-5-9.3ZM4.74,.72L.45,4.93l2.1,2.14,2.45-2.4V24h3V4.71l2.4,2.4,2.12-2.12L8.27,.73c-.97-.98-2.56-.97-3.52-.01Z"/></svg>

);
