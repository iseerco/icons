import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMapPin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,6c0-3.309-2.691-6-6-6S6,2.691,6,6c0,2.791,1.915,5.143,4.5,5.81v12.19h3V11.81c2.585-.668,4.5-3.019,4.5-5.81Zm-6,3c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Z"/></svg>

);
