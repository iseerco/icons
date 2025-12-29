import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarDay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,19c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-9H0v9Zm3-4c0-1.103.897-2,2-2h2c1.103,0,2,.897,2,2v2c0,1.103-.897,2-2,2h-2c-1.103,0-2-.897-2-2v-2Zm4.001,2h-2.001v-2h2v2ZM24,7v1H0v-1C0,4.243,2.243,2,5,2h1v-1c0-.552.448-1,1-1s1,.448,1,1v1h8v-1c0-.552.448-1,1-1s1,.448,1,1v1h1c2.757,0,5,2.243,5,5Z"/></svg>

);
