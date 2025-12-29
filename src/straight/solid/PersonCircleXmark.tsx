import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonCircleXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,12.709c-1.037,1.175-1.796,2.656-2,4.291v7h-2v-7h-2v7h-2v-7h-2v-8c0-1.654,1.346-3,3-3h4c1.637,0,2.971,1.318,2.999,2.948,0,.017.001.034.001.052v3.709ZM4.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm17.743,11.257c-2.343-2.343-6.142-2.343-8.485,0s-2.343,6.142,0,8.485,6.142,2.343,8.485,0,2.343-6.142,0-8.485Zm-2.121,7.778l-2.121-2.121-2.121,2.121-1.414-1.414,2.121-2.121-2.121-2.121,1.414-1.414,2.121,2.121,2.121-2.121,1.414,1.414-2.121,2.121,2.121,2.121-1.414,1.414Z"/>
</svg>

);
