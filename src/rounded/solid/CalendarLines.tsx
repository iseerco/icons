import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarLines = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,8v-1C0,4.243,2.243,2,5,2h1V1c0-.552,.447-1,1-1s1,.448,1,1v1h8V1c0-.552,.447-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5v1H0Zm24,2v9c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V10H24Zm-12,9c0-.552-.447-1-1-1H6c-.553,0-1,.448-1,1s.447,1,1,1h5c.553,0,1-.448,1-1Zm7-4c0-.552-.447-1-1-1H6c-.553,0-1,.448-1,1s.447,1,1,1h12c.553,0,1-.448,1-1Z"/></svg>

);
