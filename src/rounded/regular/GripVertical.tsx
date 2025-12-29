import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GripVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,0h-2c-.553,0-1,.448-1,1v4c0,.552.447,1,1,1h4c.553,0,1-.448,1-1v-2c0-1.654-1.346-3-3-3Zm1,4h-2v-2h1c.552,0,1,.449,1,1v1Zm1,5h-4c-.553,0-1,.448-1,1v4c0,.552.447,1,1,1h4c.553,0,1-.448,1-1v-4c0-.552-.447-1-1-1Zm-1,4h-2v-2h2v2Zm1,5h-4c-.553,0-1,.448-1,1v4c0,.552.447,1,1,1h2c1.654,0,3-1.346,3-3v-2c0-.552-.447-1-1-1Zm-1,3c0,.551-.448,1-1,1h-1v-2h2v1ZM9,0h-2c-1.654,0-3,1.346-3,3v2c0,.552.447,1,1,1h4c.553,0,1-.448,1-1V1c0-.552-.447-1-1-1Zm-1,4h-2v-1c0-.551.448-1,1-1h1v2Zm1,5h-4c-.553,0-1,.448-1,1v4c0,.552.447,1,1,1h4c.553,0,1-.448,1-1v-4c0-.552-.447-1-1-1Zm-1,4h-2v-2h2v2Zm1,5h-4c-.553,0-1,.448-1,1v2c0,1.654,1.346,3,3,3h2c.553,0,1-.448,1-1v-4c0-.552-.447-1-1-1Zm-1,4h-1c-.552,0-1-.449-1-1v-1h2v2Z"/></svg>

);
