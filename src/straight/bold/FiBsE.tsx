import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.5,3H22V0H5.5c-1.93,0-3.5,1.57-3.5,3.5V20.5c0,1.93,1.57,3.5,3.5,3.5H22v-3H5.5c-.275,0-.5-.224-.5-.5v-7.5h13v-3H5V3.5c0-.276,.225-.5,.5-.5Z"/></svg>

);
