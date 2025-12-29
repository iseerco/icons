import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngleSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5v13A5.507,5.507,0,0,1,18.5,24H5.5A5.506,5.506,0,0,1,0,18.5V5.5A5.506,5.506,0,0,1,5.5,0h13A5.507,5.507,0,0,1,24,5.5ZM3,18.5A2.5,2.5,0,0,0,5.5,21h13A2.5,2.5,0,0,0,21,18.5V5.5A2.5,2.5,0,0,0,18.5,3H5.5A2.5,2.5,0,0,0,3,5.5ZM14.779,9.04,12.233,6.449a1.5,1.5,0,1,0-2.139,2.1l2.554,2.6a1.223,1.223,0,0,1-.009,1.707l-2.545,2.591a1.5,1.5,0,1,0,2.139,2.1L14.77,14.97a4.2,4.2,0,0,0,.009-5.93Z"/></svg>

);
