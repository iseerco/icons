import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleRobbery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm9,2.469l-3.038,2.531h.038V24h-2v-7h-3v7h-2V7.5h.038l-3.038-2.531V0h2V4.031l2.362,1.969h4.275l2.362-1.969V0h2V4.969Zm-20.5,.031c1.381,0,2.5-1.119,2.5-2.5S4.881,0,3.5,0,1,1.119,1,2.5s1.119,2.5,2.5,2.5Zm5.435,6h2.065v2h-2.935l-2.065-2.212v6.212h-2v7H2v-7H0V9c0-1.654,1.346-3,3-3,.967,0,1.819,.467,2.368,1.18l3.567,3.82Z"/>
</svg>

);
