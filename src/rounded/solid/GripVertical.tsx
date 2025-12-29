import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,6h-4c-.553,0-1-.448-1-1V1c0-.552.447-1,1-1h2c1.654,0,3,1.346,3,3v2c0,.552-.447,1-1,1Zm0,9h-4c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Zm-2,9h-2c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v2c0,1.654-1.346,3-3,3ZM9,6h-4c-.553,0-1-.448-1-1v-2c0-1.654,1.346-3,3-3h2c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Zm0,9h-4c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Zm0,9h-2c-1.654,0-3-1.346-3-3v-2c0-.552.447-1,1-1h4c.553,0,1,.448,1,1v4c0,.552-.447,1-1,1Z"/></svg>

);
