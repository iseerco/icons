import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TabletAndroid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,0h-8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3h-8c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3v14Zm-5,0c0,.552-.447,1-1,1h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.553,0,1,.448,1,1Z"/>
</svg>

);
