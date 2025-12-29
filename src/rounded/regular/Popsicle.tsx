import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Popsicle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C7.038,0,3,4.038,3,9v7c0,2.757,2.243,5,5,5h3v2c0,.552.448,1,1,1s1-.448,1-1v-2h3c2.757,0,5-2.243,5-5v-7C21,4.038,16.963,0,12,0Zm7,16c0,1.654-1.346,3-3,3h-3v-10c0-.552-.448-1-1-1s-1,.448-1,1v10h-3c-1.654,0-3-1.346-3-3v-7c0-3.86,3.14-7,7-7s7,3.14,7,7v7Z"/>
</svg>

);
