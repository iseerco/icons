import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarUpdate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,10v14H24V10H0Zm12,12c-1.338,0-2.608-.542-3.534-1.466l-1.466,1.466v-3.5c0-.276,.224-.5,.5-.5h3.5l-1.121,1.121c.556,.554,1.318,.879,2.121,.879,1.302,0,2.402-.839,2.816-2h2.083c-.465,2.279-2.484,4-4.899,4Zm5-6.5c0,.276-.224,.5-.5,.5h-3.5l1.121-1.121c-.556-.554-1.318-.879-2.121-.879-1.302,0-2.402,.839-2.816,2h-2.083c.465-2.279,2.484-4,4.899-4,1.338,0,2.608,.542,3.534,1.466l1.466-1.466v3.5ZM0,8v-3c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3v3H0Z"/>
</svg>

);
