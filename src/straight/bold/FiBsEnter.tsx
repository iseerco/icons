import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsEnter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M3,3H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V21H3Z"/><path d="M24,13.5,24,10.5l-14.691.026,3.465-3.465L10.65,4.939,6.065,9.525a3.5,3.5,0,0,0,0,4.95l4.585,4.586,2.121-2.122L9.359,13.526Z"/></svg>

);
