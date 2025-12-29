import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHotel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,0H6.5c-1.93,0-3.5,1.57-3.5,3.5V24H21V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21h-3v-3h1v-3H8v3h1v3h-3V3.5c0-.276,.224-.5,.5-.5h11c.276,0,.5,.224,.5,.5V21ZM8,10h3v3h-3v-3Zm5,0h3v3h-3v-3Zm-5-5h3v3h-3v-3Zm5,0h3v3h-3v-3Z"/></svg>

);
