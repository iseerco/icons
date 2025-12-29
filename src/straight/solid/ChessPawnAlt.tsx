import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessPawnAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,8V6H8.556A3.959,3.959,0,0,1,8,4a4,4,0,0,1,8,0,3.959,3.959,0,0,1-.556,2H17V8ZM22,23a3,3,0,0,0-3-3H5a3,3,0,0,0-3,3v1H22ZM15.071,10H8.929C8.564,15.256,6.774,18,5,18H19C17.226,18,15.436,15.256,15.071,10Z"/></svg>

);
