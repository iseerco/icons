import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCheap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.55,19.071l-4.293,4.207c-.48.48-1.116.722-1.753.722-.641,0-1.283-.244-1.771-.732l-4.25-4.25,2.121-2.121,2.396,2.396V0h3v19.33l2.45-2.401,2.1,2.143ZM5,10c0,2.757,2.243,5,5,5v-3c-1.103,0-2-.897-2-2s.897-2,2-2v-3c-2.757,0-5,2.243-5,5ZM14,.841c-1.226-.538-2.578-.841-4-.841C4.486,0,0,4.486,0,10s4.486,10,10,10v-3c-3.86,0-7-3.14-7-7s3.14-7,7-7c1.487,0,2.865.47,4,1.264V.841Z"/>
</svg>

);
