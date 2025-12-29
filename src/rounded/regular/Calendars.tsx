import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Calendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-6V1c0-.552-.447-1-1-1s-1,.448-1,1v1c-2.757,0-5,2.243-5,5V15c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm3,13c0,1.654-1.346,3-3,3H9c-1.654,0-3-1.346-3-3v-6H22v6ZM6,7c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3H6Zm14,16c0,.552-.447,1-1,1H5c-2.757,0-5-2.243-5-5V8c0-.552,.447-1,1-1s1,.448,1,1v11c0,1.654,1.346,3,3,3h14c.553,0,1,.448,1,1Z"/></svg>

);
