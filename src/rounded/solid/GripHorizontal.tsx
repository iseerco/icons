import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5,10H1c-.552,0-1-.448-1-1v-2c0-1.654,1.346-3,3-3h2c.552,0,1,.448,1,1v4c0,.552-.448,1-1,1Zm9,0h-4c-.552,0-1-.448-1-1v-4c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v4c0,.552-.448,1-1,1Zm9,0h-4c-.552,0-1-.448-1-1v-4c0-.552.448-1,1-1h2c1.654,0,3,1.346,3,3v2c0,.552-.448,1-1,1ZM5,20h-2c-1.654,0-3-1.346-3-3v-2c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v4c0,.552-.448,1-1,1Zm9,0h-4c-.552,0-1-.448-1-1v-4c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v4c0,.552-.448,1-1,1Zm7,0h-2c-.552,0-1-.448-1-1v-4c0-.552.448-1,1-1h4c.552,0,1,.448,1,1v2c0,1.654-1.346,3-3,3Z"/></svg>

);
