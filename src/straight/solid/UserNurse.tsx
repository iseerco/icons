import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserNurse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,24v-2c0-2.757,2.243-5,5-5h.451l3.547,4.023,3.527-4.023h.453c2.757,0,5,2.243,5,5v2H3ZM6,0v8h12V0H6Zm9,5h-2v2h-2v-2h-2v-2h2V1h2v2h2v2Zm-8.91,5c.478,2.833,2.942,5,5.91,5s5.431-2.167,5.91-5H6.09Z"/></svg>

);
