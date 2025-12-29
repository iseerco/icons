import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrRectangleVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,24H7.5c-2.48,0-4.5-2.02-4.5-4.5V4.5C3,2.02,5.02,0,7.5,0h9c2.48,0,4.5,2.02,4.5,4.5v15c0,2.48-2.02,4.5-4.5,4.5ZM7.5,1c-1.93,0-3.5,1.57-3.5,3.5v15c0,1.93,1.57,3.5,3.5,3.5h9c1.93,0,3.5-1.57,3.5-3.5V4.5c0-1.93-1.57-3.5-3.5-3.5H7.5Z"/></svg>

);
