import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVolumeOff = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,23.609l-7.733-5.109h-3.144c-1.171,0-2.123-.952-2.123-2.123V7.623c0-1.171.952-2.123,2.123-2.123h3.144L13,.391v23.219ZM3,15.5h3.169l3.831,2.531V5.969l-3.831,2.531h-3.169v7Z"/></svg>

);
