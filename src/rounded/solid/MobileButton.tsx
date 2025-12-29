import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MobileButton = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,0h-6c-2.757,0-5,2.243-5,5v14c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,21h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1Z"/></svg>

);
