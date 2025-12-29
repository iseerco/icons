import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Wind = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,13H0V11H8Zm12.915-1.894A5,5,0,1,0,12,8V9h2V8a3,3,0,1,1,3,3H10v2H20a2,2,0,1,1-2,2H16a4,4,0,1,0,4.915-3.894ZM11,16H0v2H11a2,2,0,1,1-2,2H7a4,4,0,1,0,4-4ZM11,4A4,4,0,0,0,3,4H5A2,2,0,1,1,7,6H0V8H7A4,4,0,0,0,11,4Z"/></svg>

);
