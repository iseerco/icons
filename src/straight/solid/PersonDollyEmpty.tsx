import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonDollyEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1,2.5C1,1.119,2.119,0,3.5,0s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5S1,3.881,1,2.5Zm23.006,16.56l-.451-1.949-8.581,1.989-3.049-13.15-1.948.451,1.066,4.6h-2.81l-1.671-3.341c-.511-1.023-1.539-1.659-2.683-1.659h-1.379c-1.378,0-2.5,1.121-2.5,2.5v5.661c0,.875.445,1.671,1.202,2.137l3.798,2.27v5.433h2v-6.567l-2-1.195v-7.232l1.997,3.994h4.51l1.407,6.07c-1.098.264-1.914,1.251-1.914,2.43,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.196-.023-.386-.066-.569l8.072-1.871ZM1,24h2v-4.298l-2-1.195v5.493Z"/>
</svg>

);
