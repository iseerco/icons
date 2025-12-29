import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTram = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,9H12V3A2,2,0,1,0,9,4.732V9H3.5A3.5,3.5,0,0,0,0,12.5V24H24V12.5A3.5,3.5,0,0,0,20.5,9Zm.5,3.5V16H17V12h3.5A.5.5,0,0,1,21,12.5ZM14,12v4H10V12ZM3.5,12H7v4H3V12.5A.5.5,0,0,1,3.5,12ZM3,21V19H21v2ZM13,2a2,2,0,1,1,2,2A2,2,0,0,1,13,2ZM7.233,5.876,0,7.1V4.056L6,3.041A3.978,3.978,0,0,0,7.233,5.876ZM24,0V3.043l-5.546.937A3.946,3.946,0,0,0,19,2,3.946,3.946,0,0,0,18.819.876Z"/></svg>

);
