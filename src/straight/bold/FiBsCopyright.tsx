import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCopyright = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.011,9.011,0,0,0,12,3Z"/><path d="M11.933,18.769A6.771,6.771,0,1,1,16.722,7.211L14.6,9.333a3.772,3.772,0,1,0,0,5.334l2.121,2.122A6.752,6.752,0,0,1,11.933,18.769Z"/></svg>

);
