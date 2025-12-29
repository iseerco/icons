import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMusicSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M5.5,12c-3,0-5.5,2.5-5.5,5.5S2.5,23,5.5,23s5.5-2.5,5.5-5.5S8.5,12,5.5,12z M5.5,20C4.1,20,3,18.9,3,17.5S4.1,15,5.5,15  S8,16.1,8,17.5S6.9,20,5.5,20z M24,4.5C24,2.6,22.4,1,20.5,1h-9C9.6,1,8,2.6,8,4.5v1.4L2.2,0L0,2.2L21.8,24l2.1-2.1l-1-1  c0.7-0.9,1.1-2.1,1.1-3.3L24,4.5L24,4.5z M11,4.5C11,4.2,11.2,4,11.5,4h9C20.8,4,21,4.2,21,4.5v8.1c-0.8-0.4-1.6-0.6-2.5-0.6  c-1.2,0-2.4,0.4-3.3,1.1L11,8.9C11,8.9,11,4.5,11,4.5z M20.7,18.6l-3.4-3.4c0.3-0.2,0.7-0.3,1.1-0.3c1.4,0,2.5,1.1,2.5,2.5  C21,17.9,20.9,18.3,20.7,18.6L20.7,18.6z"/>
</svg>

);
