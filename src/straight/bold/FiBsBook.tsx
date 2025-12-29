import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H5A3,3,0,0,0,2,3V19.5A4.505,4.505,0,0,0,6.5,24H22V2A2,2,0,0,0,20,0ZM8,3V15H6.5a4.445,4.445,0,0,0-1.5.276V3ZM19,21H6.5a1.5,1.5,0,0,1,0-3H19v3Zm-8-6V3h8V15Z"/></svg>

);
