import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,10c-.552,0-1-.448-1-1s.448-1,1-1h8v-1c0-2.757-2.243-5-5-5h-1V1c0-.552-.448-1-1-1s-1,.448-1,1v1H8V1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v1H8c.552,0,1,.448,1,1s-.448,1-1,1H0v9c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V10h-8Zm-4,11c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm1-5c0,.552-.448,1-1,1s-1-.448-1-1v-7c0-.552,.448-1,1-1s1,.448,1,1v7Z"/></svg>

);
