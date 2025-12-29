import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,22V2.823l4.3,4.3,1.414-1.414L13.768.763a2.5,2.5,0,0,0-3.536,0l-4.95,4.95L6.7,7.127l4.3-4.3V22H5v2H19V22Z"/></svg>

);
