import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ThermometerHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,17A7,7,0,1,1,7,12.111V5c.211-6.609,9.791-6.6,10,0v7.111A7.007,7.007,0,0,1,19,17Zm-4,0a3,3,0,0,0-2-2.828V8a1,1,0,0,0-2,0v6.172A3,3,0,1,0,15,17Z"/></svg>

);
