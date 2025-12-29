import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUndoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,6H4.508l3.45-3.45L5.837.429.887,5.379a3,3,0,0,0,0,4.242l4.95,4.95L7.958,12.45,4.508,9H20.5a.5.5,0,0,1,.5.5v11a.5.5,0,0,1-.5.5H2v3H20.5A3.5,3.5,0,0,0,24,20.5V9.5A3.5,3.5,0,0,0,20.5,6Z"/></svg>

);
