import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Ballot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,24H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h10c2.757,0,5,2.243,5,5v14c0,2.757-2.243,5-5,5ZM7,2c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3H7Zm11,4c0-.552-.448-1-1-1h-4c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1Zm0,6c0-.552-.448-1-1-1h-4c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1Zm0,6c0-.552-.448-1-1-1h-4c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1ZM10,7v-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1v2c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Zm0,6v-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1v2c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Zm0,6v-2c0-.552-.448-1-1-1h-2c-.552,0-1,.448-1,1v2c0,.552,.448,1,1,1h2c.552,0,1-.448,1-1Z"/></svg>

);
