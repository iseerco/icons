import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,5v5.5H4.5L7.95,7.052,5.829,4.931.879,9.882a3,3,0,0,0,0,4.242l4.949,4.95L7.95,16.953,4.5,13.5H21V19h3V5Z"/></svg>

);
