import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,4.5l3.45,3.449,2.121-2.121L14.121.883a3,3,0,0,0-4.242,0L4.929,5.832,7.05,7.953,10.5,4.5V21H5v3H19V21H13.5Z"/></svg>

);
