import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Duplicate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="17 0.016 17 5 21.86 5 17 0.016"/><path d="M15,7V0H10A3,3,0,0,0,7,3V19H22V7Z"/><path d="M5,21V4H5A3,3,0,0,0,2,7V24H18V21Z"/></svg>

);
