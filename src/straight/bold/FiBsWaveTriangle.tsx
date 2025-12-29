import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWaveTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="16.429 23.572 7.43 6.574 2.607 14.761 .022 13.239 7.57 .426 16.571 17.428 21.391 9.257 23.975 10.781 16.429 23.572"/></svg>

);
