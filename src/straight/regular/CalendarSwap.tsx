import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarSwap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12.957,10.793l4.207,4.207H7v-2h5.336l-.793-.793,1.414-1.414Zm-1.914,10.414l1.414-1.414-.793-.793h5.336v-2H6.836l4.207,4.207ZM24,5V24H0V5c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3ZM2,5v3H22v-3c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1ZM22,22V10H2v12H22Z"/>
</svg>

);
