import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cheese = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.507A5.951,5.951,0,0,0,23.8,10H2.673A1.977,1.977,0,0,0,.884,11.13C-.647,14.839-.531,23.92,4.833,24h2.93a1.5,1.5,0,0,0,1.412-1.01,3.014,3.014,0,0,1,5.65,0A1.5,1.5,0,0,0,16.237,24H18.8A5.048,5.048,0,0,0,24,19ZM7,17a2,2,0,0,1,0-4A2,2,0,0,1,7,17Zm11,2a2,2,0,0,1,0-4A2,2,0,0,1,18,19ZM22.853,8H2.673a4.031,4.031,0,0,0-.53.039A20.209,20.209,0,0,1,8.043.96,4.961,4.961,0,0,1,13.751.848l4.2,3.132L21.589,6.7A5.968,5.968,0,0,1,22.853,8Z"/></svg>

);
