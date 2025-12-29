import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Portrait = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5V21a7,7,0,0,1,14,0v3a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/><circle cx="12" cy="8" r="2"/><path d="M12,16a5.006,5.006,0,0,0-5,5v3H17V21A5.006,5.006,0,0,0,12,16Z"/></svg>

);
