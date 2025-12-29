import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalendarCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,2h-3.5V0h-1V2H7V0h-1V2H2.5C1.121,2,0,3.122,0,4.5V24H24V4.5c0-1.378-1.121-2.5-2.5-2.5ZM2.5,3H21.5c.827,0,1.5,.673,1.5,1.5v3.5H1v-3.5c0-.827,.673-1.5,1.5-1.5ZM1,23V9H23v14H1ZM17.148,11.644l.703,.712-6.293,6.207c-.291,.291-.675,.437-1.058,.437-.385,0-.769-.146-1.062-.439l-3.288-3.202,.697-.717,3.293,3.207c.2,.2,.518,.2,.712,.005l6.295-6.209Z"/></svg>

);
