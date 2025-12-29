import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,22H13.483a2.492,2.492,0,0,0,.285-.232l4.95-4.95A1,1,0,0,0,17.3,15.4l-4.3,4.3V1.031a1,1,0,0,0-2,0V19.707L6.7,15.4a1,1,0,0,0-1.414,1.414l4.95,4.95a2.492,2.492,0,0,0,.285.232H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2Z"/></svg>

);
