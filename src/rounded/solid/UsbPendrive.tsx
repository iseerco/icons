import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UsbPendrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,14a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v1a9,9,0,0,0,18,0Z"/><path d="M15,0H9A4,4,0,0,0,5,4V7.685A6.952,6.952,0,0,1,8,7h8a6.952,6.952,0,0,1,3,.685V4A4,4,0,0,0,15,0ZM10,5a1,1,0,1,1,1-1A1,1,0,0,1,10,5Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,14,5Z"/></svg>

);
