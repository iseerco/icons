import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm21.5,14.5c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-4-3h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2Zm-8-2.651c-1.249,1.545-2,3.51-2,5.651v7h-2v-7h-2v7h-2v-7H0v-8c0-1.654,1.346-3,3-3h4c1.637,0,2.971,1.318,2.999,2.948,0,.017.001,2.401.001,2.401Zm-2-2.349c0-.552-.448-1-1-1H3c-.552,0-1,.448-1,1v6h6v-6Z"/>
</svg>

);
