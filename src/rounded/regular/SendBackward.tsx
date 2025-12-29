import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendBackward = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,8h-6c-2.757,0-5,2.243-5,5v6c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5v-6c0-2.757-2.243-5-5-5Zm3,11c0,1.654-1.346,3-3,3h-6c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h6c1.654,0,3,1.346,3,3v6ZM6,15c0,.553-.448,1-1,1-2.757,0-5-2.243-5-5v-6C0,2.243,2.243,0,5,0h6c2.757,0,5,2.243,5,5,0,.553-.448,1-1,1s-1-.447-1-1c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v6c0,1.654,1.346,3,3,3,.552,0,1,.447,1,1Z"/></svg>

);
