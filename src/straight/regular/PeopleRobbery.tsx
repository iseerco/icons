import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleRobbery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5ZM3.5,5c1.381,0,2.5-1.119,2.5-2.5S4.881,0,3.5,0,1,1.119,1,2.5s1.119,2.5,2.5,2.5Zm20.5-.031l-3,2.531V24h-2v-7h-3v7h-2V7.5l-3-2.531V0h2V4.031l2.362,1.969h4.275l2.362-1.969V0h2V4.969Zm-5,3.031h-3v7h3v-7Zm-10.065,3h2.065v2h-2.935l-2.065-2.212v6.212h-2v7H2v-7H0V9c0-1.654,1.346-3,3-3,.967,0,1.819,.467,2.368,1.18l3.567,3.82Zm-4.935-2c0-.552-.448-1-1-1s-1,.448-1,1v6h2v-6Z"/>
</svg>

);
