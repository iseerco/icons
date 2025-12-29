import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonCarryBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,5h-3c-1.379,0-2.5,1.122-2.5,2.5v3.5h-1.767l-1.671-3.341c-.511-1.023-1.539-1.659-2.683-1.659h-1.379c-1.378,0-2.5,1.121-2.5,2.5v5.661c0,.875.445,1.671,1.202,2.137l3.798,2.27v5.433h2v-6.567l-2-1.195v-7.232l1.997,3.994h8.503c1.379,0,2.5-1.122,2.5-2.5v-3c0-1.378-1.121-2.5-2.5-2.5ZM4,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm0,16.007l2,1.195v4.298h-2v-5.493Z"/>
</svg>

);
