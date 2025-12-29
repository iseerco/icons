import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,10v9c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V10H0Zm15,8h-2v2c0,.552-.448,1-1,1s-1-.448-1-1v-2h-2c-.552,0-1-.448-1-1s.448-1,1-1h2v-2c0-.552,.448-1,1-1s1,.448,1,1v2h2c.552,0,1,.448,1,1s-.448,1-1,1ZM0,8v-1C0,4.243,2.243,2,5,2h1V1c0-.552,.448-1,1-1s1,.448,1,1v1h8V1c0-.552,.448-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5v1H0Z"/></svg>

);
