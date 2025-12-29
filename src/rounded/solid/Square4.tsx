import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-3,17c0,.552-.447,1-1,1s-1-.448-1-1v-3h-3c-1.654,0-3-1.346-3-3V7c0-.552,.447-1,1-1s1,.448,1,1v4c0,.551,.448,1,1,1h3V7c0-.552,.447-1,1-1s1,.448,1,1v10Z"/></svg>

);
