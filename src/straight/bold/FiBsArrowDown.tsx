import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.305,16.935l-2.78,2.78L13.5,0l-3,0,.025,19.7L7.761,16.935,5.64,19.056l3.918,3.919a3.5,3.5,0,0,0,4.949,0l3.918-3.919Z"/></svg>

);
