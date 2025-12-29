import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Eraser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.235,7.42l4.971-4.953c.943-.946,2.201-1.468,3.54-1.468s2.596.522,3.541,1.47l3.254,3.265c1.939,1.946,1.939,5.113,0,7.06l-4.972,4.991L7.235,7.42Zm15.765,13.58h-8.633l1.791-1.798L5.818,8.832,1.459,13.175c-1.939,1.946-1.939,5.113,0,7.059l1.583,1.589c.745.748,1.777,1.177,2.834,1.177h17.124c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>

);
