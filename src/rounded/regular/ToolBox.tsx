import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ToolBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,4h-1.101c-.465-2.279-2.485-4-4.899-4h-2c-2.414,0-4.435,1.721-4.899,4h-1.101C2.243,4,0,6.243,0,9v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V9c0-2.757-2.243-5-5-5ZM11,2h2c1.304,0,2.415,.836,2.828,2h-7.656c.413-1.164,1.524-2,2.828-2ZM5,6h14c1.654,0,3,1.346,3,3v1h-3v-1c0-.552-.447-1-1-1s-1,.448-1,1v1H7v-1c0-.552-.447-1-1-1s-1,.448-1,1v1H2v-1c0-1.654,1.346-3,3-3Zm14,16H5c-1.654,0-3-1.346-3-3v-7h3v1c0,.552,.447,1,1,1s1-.448,1-1v-1h10v1c0,.552,.447,1,1,1s1-.448,1-1v-1h3v7c0,1.654-1.346,3-3,3Z"/></svg>

);
