import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquarePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,10.5h3.5v3h-3.5v3.5h-3v-3.5h-3.5v-3h3.5v-3.5h3v3.5ZM24,3.5V24H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.275-.224-.5-.5-.5H3.5c-.276,0-.5,.225-.5,.5V21H21V3.5Z"/></svg>

);
