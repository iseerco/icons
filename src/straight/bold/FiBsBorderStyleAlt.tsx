import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBorderStyleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,24H0v-3H20.5c.28,0,.5-.22,.5-.5V0h3V20.5c0,1.93-1.57,3.5-3.5,3.5ZM0,6.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5S0,5.67,0,6.5ZM0,17.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5S0,16.67,0,17.5ZM0,1.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5S2.33,0,1.5,0,0,.67,0,1.5Zm5,0c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5S7.33,0,6.5,0s-1.5,.67-1.5,1.5Zm5.5,0c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5S12.83,0,12,0s-1.5,.67-1.5,1.5Zm5.5,0c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5S18.33,0,17.5,0s-1.5,.67-1.5,1.5ZM0,12c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5S0,11.17,0,12Z"/></svg>

);
