import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const B = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,24H7c-2.757,0-5-2.243-5-5V5C2,2.243,4.243,0,7,0h5.5c3.584,0,6.5,2.916,6.5,6.5,0,1.834-.764,3.494-1.99,4.677,2.858,.683,4.99,3.259,4.99,6.323,0,3.584-2.916,6.5-6.5,6.5ZM4,13v6c0,1.654,1.346,3,3,3H15.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H4Zm0-2H12.5c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H7c-1.654,0-3,1.346-3,3v6Z"/></svg>

);
