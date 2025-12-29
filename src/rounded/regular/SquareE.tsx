import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,9v2h6c.553,0,1,.448,1,1s-.447,1-1,1h-6v2c0,1.103.897,2,2,2h7c.553,0,1,.448,1,1s-.447,1-1,1h-7c-2.206,0-4-1.794-4-4v-6c0-2.206,1.794-4,4-4h7c.553,0,1,.448,1,1s-.447,1-1,1h-7c-1.103,0-2,.897-2,2Zm16-4v14c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V5C0,2.243,2.243,0,5,0h14c2.757,0,5,2.243,5,5Zm-2,0c0-1.654-1.346-3-3-3H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5Z"/></svg>

);
