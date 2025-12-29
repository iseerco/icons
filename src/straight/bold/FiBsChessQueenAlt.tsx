import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessQueenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.059,19.045A62.442,62.442,0,0,1,16.232,9H18V6H15.618L17,1,14.294,2.465,12,0,9.706,2.465,7,1,8.382,6H6V9H7.768A62.442,62.442,0,0,1,4.941,19.045,3.5,3.5,0,0,0,2,22.5V24H22V22.5A3.5,3.5,0,0,0,19.059,19.045ZM13.2,9a58.944,58.944,0,0,0,2.653,10H8.145A58.944,58.944,0,0,0,10.8,9Z"/></svg>

);
