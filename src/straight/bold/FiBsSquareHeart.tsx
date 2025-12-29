import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,10.7c0,2.83-5,6.3-5,6.3,0,0-5-3.47-5-6.3,0-1.49,1.12-2.7,2.5-2.7s2.5,.96,2.5,2.45c0-1.49,1.12-2.45,2.5-2.45s2.5,1.21,2.5,2.7Zm7-7.2c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5ZM3,3.5c0-.28,.22-.5,.5-.5H20.5c.28,0,.5,.22,.5,.5V21H3V3.5Z"/></svg>

);
