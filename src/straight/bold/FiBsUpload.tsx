import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUpload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.542,4.321,10.565,19l3,0L13.542,4.339,16.306,7.1l2.121-2.122L14.508,1.062a3.5,3.5,0,0,0-4.95,0L5.639,4.981,7.76,7.1Z"/><path d="M21,16v5H3V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z"/></svg>

);
