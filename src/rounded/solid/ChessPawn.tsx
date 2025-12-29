import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPawn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,23a1,1,0,0,1-1,1H2a1,1,0,0,1,0-2,5.006,5.006,0,0,0,5-5V16H17v1a5.006,5.006,0,0,0,5,5A1,1,0,0,1,23,23ZM5,14H19a1,1,0,0,0,0-2H16.889a7,7,0,1,0-9.778,0H5a1,1,0,0,0,0,2Z"/></svg>

);
