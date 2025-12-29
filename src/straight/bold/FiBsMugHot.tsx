import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMugHot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,4H8V0h3Zm5-4H13V4h3ZM6,0H3V4H6ZM24,20H19v.5A3.5,3.5,0,0,1,15.5,24H3.5A3.5,3.5,0,0,1,0,20.5V6H19v4h1.5A3.5,3.5,0,0,1,24,13.5ZM16,9H3V20.5a.5.5,0,0,0,.5.5h12a.5.5,0,0,0,.5-.5Zm5,4.5a.5.5,0,0,0-.5-.5H19v4h2Z"/></svg>

);
