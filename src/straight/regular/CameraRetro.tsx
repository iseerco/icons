import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraRetro = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0h-8.414l-3,3h-2.586V1h-2v2h-2c-1.654,0-3,1.346-3,3v18h24V3c0-1.654-1.346-3-3-3ZM3,5h7.414l3-3h7.586c.551,0,1,.448,1,1v9h-4.084c-.477-2.834-2.948-5-5.916-5s-5.439,2.166-5.916,5H2v-6c0-.552.449-1,1-1Zm13,8c0,2.206-1.794,4-4,4s-4-1.794-4-4,1.794-4,4-4,4,1.794,4,4ZM2,22v-8h4.084c.477,2.834,2.948,5,5.916,5s5.439-2.166,5.916-5h4.084v8H2Z"/></svg>

);
