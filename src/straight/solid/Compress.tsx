import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Compress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,5A1,1,0,0,1,5,6H0V8H5A3,3,0,0,0,8,5V0H6Z"/><path d="M16,19v5h2V19a1,1,0,0,1,1-1h5V16H19A3,3,0,0,0,16,19Z"/><path d="M19,6a1,1,0,0,1-1-1V0H16V5a3,3,0,0,0,3,3h5V6Z"/><path d="M5,16H0v2H5a1,1,0,0,1,1,1v5H8V19A3,3,0,0,0,5,16Z"/></svg>

);
