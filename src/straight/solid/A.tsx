import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const A = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.713,24h2.156L14.859,1.661c-.511-1.024-1.54-1.661-2.684-1.661h-.002c-1.146,0-2.174,.638-2.711,1.724L.168,24H2.335l2.92-7h13.636l2.822,7ZM6.089,15L11.28,2.554c.172-.347,.507-.554,.894-.554h0c.387,0,.721,.207,.862,.481l5.047,12.519H6.089Z"/></svg>

);
