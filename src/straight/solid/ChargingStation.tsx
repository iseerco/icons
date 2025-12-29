import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChargingStation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,2V4H20V2H18V6a2,2,0,0,0,2,2V18a1,1,0,0,1-1,1H16V11H13V9h3V3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3V9H3v2H0V24H16V21h3a3,3,0,0,0,3-3V8a2,2,0,0,0,2-2V2ZM10.772,11.426,9.008,14.959l-1.789-.893L8.75,11H6.615A1.614,1.614,0,0,1,5.07,8.917L7.293,4.756l1.76.949L7.275,9H9.4a1.6,1.6,0,0,1,1.376,2.426Z"/></svg>

);
