import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowUpRightFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,2.5v7.5h-3V5.121l-11.439,11.439-2.121-2.121L18.879,3h-4.879V0h7.5c1.378,0,2.5,1.122,2.5,2.5Zm-8,18.5H3V8.5c0-.276,.224-.5,.5-.5h7.5l3-3H3.5c-1.93,0-3.5,1.57-3.5,3.5v15.5H19V10l-3,3v8Z"/></svg>

);
