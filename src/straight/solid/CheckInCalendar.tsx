import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CheckInCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,8v-3c0-1.654,1.346-3,3-3h3V0h2v2h8V0h2v2h3c1.654,0,3,1.346,3,3v3H0Zm0,2v6h7.948l-1.571-1.571,1.414-1.414,2.659,2.659c.731.731.731,1.92,0,2.651l-2.659,2.659-1.414-1.414,1.571-1.571H0v6h24v-14H0Z"/>
</svg>

);
