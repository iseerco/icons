import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Calendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,23c0,.552-.447,1-1,1H5c-2.757,0-5-2.243-5-5V8c0-.552,.447-1,1-1s1,.448,1,1v11c0,1.654,1.346,3,3,3h14c.553,0,1,.448,1,1Zm-1-21V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-6V1c0-.552-.447-1-1-1s-1,.448-1,1v1c-2.757,0-5,2.243-5,5H24c0-2.757-2.243-5-5-5ZM4,15c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-6H4v6Z"/></svg>

);
