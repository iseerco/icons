import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MugHot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,12a3,3,0,0,0-3-3H19V6H1V21a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3V19h4Zm-6,9a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8H17Zm4-4H19V11h1a1,1,0,0,1,1,1ZM11,4H9V0h2Zm4,0H13V0h2ZM7,4H5V0H7Z"/></svg>

);
