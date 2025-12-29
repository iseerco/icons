import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareT = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,7h-4v11c0,.553-.448,1-1,1s-1-.447-1-1V7h-4c-.552,0-1-.447-1-1s.448-1,1-1h10c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
