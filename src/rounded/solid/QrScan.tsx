import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const QrScan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,13H1c-.552,0-1-.448-1-1s.448-1,1-1h22c.552,0,1,.448,1,1s-.448,1-1,1Zm-15,10c0-.552-.448-1-1-1h-2c-1.654,0-3-1.346-3-3v-2c0-.552-.448-1-1-1s-1,.448-1,1v2c0,2.757,2.243,5,5,5h2c.552,0,1-.448,1-1Zm16-4v-2c0-.552-.448-1-1-1s-1,.448-1,1v2c0,1.654-1.346,3-3,3h-2c-.552,0-1,.448-1,1s.448,1,1,1h2c2.757,0,5-2.243,5-5Zm0-12v-2c0-2.757-2.243-5-5-5h-2c-.552,0-1,.448-1,1s.448,1,1,1h2c1.654,0,3,1.346,3,3v2c0,.552.448,1,1,1s1-.448,1-1Zm-22,0v-2c0-1.654,1.346-3,3-3h2c.552,0,1-.448,1-1s-.448-1-1-1h-2C2.243,0,0,2.243,0,5v2c0,.552.448,1,1,1s1-.448,1-1Z"/>
</svg>

);
