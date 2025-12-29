import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortShapesDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,10H14V1h9V10Zm-4.5,3.7l-5,9.3h10l-5-9.3Zm-10.5,5.59V0h-3V19.33l-2.45-2.4L.45,19.07l4.28,4.2c.49,.49,1.13,.73,1.77,.73s1.28-.24,1.77-.73l4.25-4.25-2.12-2.12-2.4,2.4Z"/></svg>

);
