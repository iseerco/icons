import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2h-1V1c0-.552-.448-1-1-1s-1,.448-1,1v1H8V1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm0,20H5c-1.654,0-3-1.346-3-3V10h6c.552,0,1-.448,1-1s-.448-1-1-1H2v-1c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v1h-6c-.552,0-1,.448-1,1s.448,1,1,1h6v9c0,1.654-1.346,3-3,3Zm-6-13v7c0,.552-.448,1-1,1s-1-.448-1-1v-7c0-.552,.448-1,1-1s1,.448,1,1Zm0,10c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>

);
