import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBabyCarriage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,0A2.448,2.448,0,0,0,12,2.5V9H6.629L5.093,6.849C4.137,5.262.333,3.78,0,6.5A1.5,1.5,0,0,0,1.5,8a1.419,1.419,0,0,1,1.151.592L4,10.481V11.5A5.506,5.506,0,0,0,9.5,17h1.109L8.777,19.016a2.5,2.5,0,1,0,2.186,2.055L14,17.73l3.037,3.341a2.5,2.5,0,1,0,2.186-2.055L17.391,17H18.5A5.506,5.506,0,0,0,24,11.5v-1C24,2.194,17.786,0,14.5,0ZM15,3.032A6.4,6.4,0,0,1,20.907,9H15ZM18.5,14h-9a2.5,2.5,0,0,1-2.45-2h13.9A2.5,2.5,0,0,1,18.5,14Z"/></svg>

);
