import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDirectionSignal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.621,16l-4-4h-6.121v-2h8.5V2h-8.506l.006-1.995-3-.01-.006,2.005h-6.115L.379,6l4,4h6.121v2H2v8h8.492l.008,4.003,3-.006-.008-3.997h6.129l4-4ZM4.621,6l1-1h13.379v2H5.621l-1-1Zm13.758,11H5v-2h13.379l1,1-1,1Z"/>
</svg>

);
