import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Plug = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,7h-5V1c0-.552-.447-1-1-1s-1,.448-1,1v6h-6V1c0-.552-.447-1-1-1s-1,.448-1,1v6H2c-.553,0-1,.448-1,1s.447,1,1,1h1v3c0,4.624,3.507,8.442,8,8.941v2.059c0,.552.447,1,1,1s1-.448,1-1v-2.059c4.493-.5,8-4.317,8-8.941v-3h1c.553,0,1-.448,1-1s-.447-1-1-1Z"/>
</svg>

);
