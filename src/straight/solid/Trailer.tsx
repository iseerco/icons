import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Trailer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,21a3,3,0,0,1,6,0A3,3,0,0,1,5,21Zm17-2V14H0v4a3,3,0,0,0,3,3c.168-6.6,9.834-6.592,10,0H24V19ZM4,4H6v8H8V4h2v8h2V4h2v8h2V4h2v8h4V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3v9H4Z"/></svg>

);
