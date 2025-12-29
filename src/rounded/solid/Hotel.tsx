import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Hotel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,0H8C5.243,0,3,2.243,3,5v14c0,2.757,2.243,5,5,5h1c.552,0,1-.448,1-1v-5h-1c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1s-.448,1-1,1h-1v5c0,.552,.448,1,1,1h1c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-6,14h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm5,8h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Zm0-4h-1c-.552,0-1-.448-1-1s.448-1,1-1h1c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
