import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserPilot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6,8.984c0,3.309,2.691,6,6,6s6-2.691,6-6v-2.984l2-1v-3L13.698.209C13.14.07,12.57,0,12,0s-1.14.07-1.698.209l-6.302,1.791v3l2,1v2.984Zm9,0c0,1.654-1.346,3-3,3s-3-1.346-3-3v-1.199c.833.123,1.818.214,3,.214s2.167-.091,3-.214v1.199Zm-4.985-6.842l1.985,1.191,1.985-1.191,1.029,1.715-3.015,1.809-3.015-1.809,1.029-1.715Zm10.985,19.357v2.5h-3v-2.5c0-1.379-1.122-2.5-2.5-2.5h-2v5h-3v-5h-2c-1.378,0-2.5,1.121-2.5,2.5v2.5h-3v-2.5c0-3.032,2.467-5.5,5.5-5.5h7c3.033,0,5.5,2.468,5.5,5.5Z"/></svg>

);
