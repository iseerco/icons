import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessKnight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,21l0-10.791a10.456,10.456,0,0,0-2.552-7.231C17.6,1,14.922,0,11.5,0H10.329l-.284,1.136C9.379,3.8,7.31,5.043,4.408,6.09A3.644,3.644,0,0,0,2,9.5V13H8.694A13.575,13.575,0,0,1,2.9,21H1v3H24V21ZM11.988,11.686,12.2,10H5V9.5a.628.628,0,0,1,.428-.591C8.25,7.893,11.243,6.4,12.577,3.043A6.97,6.97,0,0,1,17.238,5.01,7.522,7.522,0,0,1,19,10.111V21H7.564A16.327,16.327,0,0,0,11.988,11.686Z"/></svg>

);
