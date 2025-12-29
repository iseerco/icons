import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrJ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,24H6.5c-2.481,0-4.5-2.019-4.5-4.5v-1c-.01-.649,1.01-.649,1,0v1c0,1.93,1.57,3.5,3.5,3.5h11c1.93,0,3.5-1.57,3.5-3.5V.5c-.01-.649,1.01-.649,1,0V19.5c0,2.481-2.019,4.5-4.5,4.5Z"/></svg>

);
