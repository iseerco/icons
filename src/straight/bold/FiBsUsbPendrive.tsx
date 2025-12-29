import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUsbPendrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8.051V0H5V8.051A2.5,2.5,0,0,0,3,10.5V15a9,9,0,0,0,18,0V10.5A2.5,2.5,0,0,0,19,8.051ZM8,3h8V8H14V6H10V8H8ZM18,15A6,6,0,0,1,6,15V11H18Z"/></svg>

);
