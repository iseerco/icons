import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFax = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,13.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5,.67-1.5,1.5-1.5,1.5,.67,1.5,1.5Zm-1.5,3.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm5-5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm0,5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm6.5-12.62V24H0V7.5c0-1.93,1.57-3.5,3.5-3.5h2c1.93,0,3.5,1.57,3.5,3.5v.5h2V3.5c0-1.93,1.57-3.5,3.5-3.5h5.12l4.38,4.38Zm-10,3.62h7v-2h-3V3h-3.5c-.28,0-.5,.22-.5,.5v4.5Zm-8-.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5v13.5h3V7.5Zm15,13.5V11H9v10h12Z"/></svg>

);
