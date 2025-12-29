import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pager = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,2H5C2.243,2,0,4.243,0,7v10c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-13,14h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm5,0h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm5,0h-1c-.553,0-1-.448-1-1s.447-1,1-1h1c.553,0,1,.448,1,1s-.447,1-1,1Zm4-5c0,.552-.447,1-1,1H5c-.553,0-1-.448-1-1v-4c0-.552.447-1,1-1h14c.553,0,1,.448,1,1v4Zm-14-3h12v2H6v-2Z"/></svg>

);
