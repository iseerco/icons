import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Trailer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12V5A5.006,5.006,0,0,1,5,0H17a5.006,5.006,0,0,1,5,5v7H18V5a1,1,0,0,0-2,0v7H14V5a1,1,0,0,0-2,0v7H10V5A1,1,0,0,0,8,5v7H6V5A1,1,0,0,0,4,5v7ZM8,24a3,3,0,0,0,0-6A3,3,0,0,0,8,24Zm15-5H22V14H0v2a5.007,5.007,0,0,0,3.017,4.589C3.655,14.3,12.868,14.651,13,21H23A1,1,0,0,0,23,19Z"/></svg>

);
