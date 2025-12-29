import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const I = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,22h-5V2h5c.553,0,1-.448,1-1s-.447-1-1-1H6c-.553,0-1,.448-1,1s.447,1,1,1h5V22H6c-.553,0-1,.448-1,1s.447,1,1,1h12c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>

);
