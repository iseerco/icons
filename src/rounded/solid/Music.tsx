import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Music = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,23a5.006,5.006,0,0,0,5-5V6a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v8.026A4.948,4.948,0,0,0,19,13a5,5,0,1,0,5,5V6a5.006,5.006,0,0,0-5-5H13A5.006,5.006,0,0,0,8,6v8.026A4.948,4.948,0,0,0,5,13,5,5,0,0,0,5,23Z"/></svg>

);
