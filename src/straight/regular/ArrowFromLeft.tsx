import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.268,10.232l-4.95-4.949L16.9,6.7l4.3,4.3H2V5H0V19H2V13H21.207l-4.3,4.3,1.414,1.414,4.95-4.949a2.5,2.5,0,0,0,0-3.536Z"/></svg>

);
