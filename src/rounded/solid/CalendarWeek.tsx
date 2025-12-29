import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarWeek = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.001,17H5v-2h14v2Zm0-15h-1v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-8v-1c0-.552-.448-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v1h24v-1c0-2.757-2.243-5-5-5ZM0,10h24v9c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-9Zm3,7c0,1.103.897,2,2,2h14c1.103,0,2-.897,2-2v-2c0-1.103-.897-2-2-2H5c-1.103,0-2,.897-2,2v2Z"/></svg>

);
