import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarSwap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M20.5,2h-2.5V0h-3V2h-6V0h-3V2H3.5C1.57,2,0,3.57,0,5.5V24H24V5.5c0-1.93-1.57-3.5-3.5-3.5ZM3,21V9H21v12H3ZM12.957,9.793l4.207,4.207H7v-2h5.336l-.793-.793,1.414-1.414Zm-6.121,6.207h10.164v2h-5.336l.793,.793-1.414,1.414-4.207-4.207Z"/>
</svg>

);
