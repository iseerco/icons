import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarBirhtdayCake = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm9,16h6v-3h-6v3Zm15-14v14h-7v-3c0-1.103-.897-2-2-2h-2v-2h-2v2h-2c-1.103,0-2,.897-2,2v3H0v-14h24Zm-10.5,4.5c0-1.125-1.5-2.25-1.5-2.25,0,0-1.5,1.125-1.5,2.25,0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5Z"/>
</svg>

);
