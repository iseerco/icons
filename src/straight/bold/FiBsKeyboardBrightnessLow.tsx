import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKeyboardBrightnessLow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,17H7v-3h10v3ZM12,7c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5ZM3,15.5c0-.83-.67-1.5-1.5-1.5S0,14.67,0,15.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm21,0c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm-4.5-5.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm-15,0c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Z"/></svg>

);
