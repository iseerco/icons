import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheckOutCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5v19H0v-5.349l2.716,2.349h18.284v-11H2.679l-2.679,2.336v-7.336c0-1.654,1.346-3,3-3h3V0h3v2h6V0h3v2h3c1.654,0,3,1.346,3,3ZM.371,14.667c-.494.443-.494,1.217,0,1.66l3.65,3.157v-2.484h6.979v-3h-6.979v-2.516L.371,14.667Z"/>
</svg>

);
