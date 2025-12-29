import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCardsBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.585,4.41c-.432-.788-1.146-1.361-1.994-1.608L12.781,.135c-.864-.252-1.773-.152-2.561,.28-.789,.433-1.361,1.146-1.609,1.998l-.477,1.587H3.5c-1.93,0-3.5,1.57-3.5,3.5V24H16v-2.332l3.234,1.203,4.63-15.899c.253-.863,.153-1.773-.279-2.562ZM13,21H3V7.5c0-.276,.225-.5,.5-.5H12.5c.275,0,.5,.224,.5,.5v13.5Zm7.984-14.868l-3.729,12.802-1.256-.467V7.5c0-1.93-1.57-3.5-3.5-3.5h-1.233l.221-.736c.035-.12,.114-.185,.175-.218,.06-.033,.158-.066,.264-.035l8.81,2.667c.12,.035,.185,.115,.219,.175,.033,.061,.065,.158,.029,.279Z"/>
</svg>

);
