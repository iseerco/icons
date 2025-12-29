import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowFromTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.95,16.052,13.5,19.5V3.005H19v-3H5v3h5.5V19.5l-3.45-3.45L4.929,18.173l4.95,4.951a3,3,0,0,0,4.242,0l4.95-4.95Z"/></svg>

);
