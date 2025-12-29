import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Pi = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,19c-.552,0-1,.448-1,1,0,1.103-.897,2-2,2s-2-.897-2-2V2h5c.552,0,1-.448,1-1s-.448-1-1-1H6.5C4.483,0,2.877.59,1.726,1.754-.007,3.507,0,5.91,0,6.011c.006.548.452.986,1,.986h.005c.55-.003.995-.453.995-1.003,0-.409.126-3.994,4.5-3.994h.5v13.612c0,4.083-2.656,6.632-2.68,6.655-.405.376-.428,1.008-.053,1.413.197.212.465.32.733.32.244,0,.488-.088.68-.267.136-.126,3.32-3.139,3.32-8.121V2h7v18c0,2.206,1.794,4,4,4s4-1.794,4-4c0-.552-.448-1-1-1Z"/></svg>

);
