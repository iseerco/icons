import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.305,7.065l-2.78-2.78L13.5,24l-3,0,.025-19.7L7.761,7.065,5.64,4.944,9.558,1.025a3.5,3.5,0,0,1,4.949,0l3.918,3.919Z"/></svg>

);
