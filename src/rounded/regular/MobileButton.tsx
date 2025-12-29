import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MobileButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,24h-6c-2.757,0-5-2.243-5-5V5C4,2.243,6.243,0,9,0h6c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM9,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3h-6Zm5,17h0c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1h0c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Z"/></svg>

);
