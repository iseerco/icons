import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>15-arrow</title><path d="M13,21.976V2.8l4.3,4.3,1.414-1.415L13.768.739a2.5,2.5,0,0,0-3.536,0L5.282,5.688,6.7,7.1,11,2.8V21.976H5v2H19v-2Z"/></svg>

);
