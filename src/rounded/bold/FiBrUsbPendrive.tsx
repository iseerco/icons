import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUsbPendrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8.762V4.5A4.505,4.505,0,0,0,14.5,0h-5A4.505,4.505,0,0,0,5,4.5V8.762A4.5,4.5,0,0,0,3,12.5V15a9,9,0,0,0,18,0V12.5A4.5,4.5,0,0,0,19,8.762ZM8,4.5A1.5,1.5,0,0,1,9.5,3h5A1.5,1.5,0,0,1,16,4.5V8H14a2,2,0,0,0-4,0H8ZM18,15A6,6,0,0,1,6,15V12.5A1.5,1.5,0,0,1,7.5,11h9A1.5,1.5,0,0,1,18,12.5Z"/></svg>

);
