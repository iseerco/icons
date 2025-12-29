import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSpeaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0H6A3,3,0,0,0,3,3V24H21V3A3,3,0,0,0,18,0Zm0,21H6V3H18Z"/><circle cx="12" cy="7" r="2"/><path d="M12,19.5A4.5,4.5,0,1,0,7.5,15,4.505,4.505,0,0,0,12,19.5Zm0-6A1.5,1.5,0,1,1,10.5,15,1.5,1.5,0,0,1,12,13.5Z"/></svg>

);
