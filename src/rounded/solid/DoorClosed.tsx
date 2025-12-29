import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoorClosed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,22h-3V5c0-2.757-2.243-5-5-5h-6c-2.757,0-5,2.243-5,5V22H1c-.553,0-1,.448-1,1s.447,1,1,1H23c.553,0,1-.448,1-1s-.447-1-1-1Zm-7.5-8c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
