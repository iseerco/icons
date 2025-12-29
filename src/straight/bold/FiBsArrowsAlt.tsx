import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowsAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.629,11.108,19,6.872v3.616H13.488V5h3.578L12.83.371a1.113,1.113,0,0,0-1.66,0L6.934,5h3.554v5.488H5V6.872L.371,11.108a1.113,1.113,0,0,0,0,1.66L5,17V13.488h5.488V19H6.934l4.236,4.629a1.113,1.113,0,0,0,1.66,0L17.066,19H13.488V13.488H19V17l4.629-4.236A1.113,1.113,0,0,0,23.629,11.108Z"/></svg>

);
