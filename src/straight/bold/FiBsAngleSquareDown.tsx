import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngleSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5ZM3,21H21V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5Zm10.768-5.732,4.25-4.25L15.9,8.9l-3.9,3.9L8.1,8.9,5.982,11.018l4.25,4.25a2.5,2.5,0,0,0,3.536,0Z"/></svg>

);
