import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapPin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.967,2.167,5.431,5,5.91v12.09h2V11.91c2.833-.478,5-2.942,5-5.91Z"/></svg>

);
