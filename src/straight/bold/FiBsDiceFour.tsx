import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiceFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5ZM3,21H21V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5ZM6,7.5A1.5,1.5,0,1,0,7.5,6,1.5,1.5,0,0,0,6,7.5Zm9,0A1.5,1.5,0,1,0,16.5,6,1.5,1.5,0,0,0,15,7.5Zm-9,9A1.5,1.5,0,1,0,7.5,15,1.5,1.5,0,0,0,6,16.5Zm9,0A1.5,1.5,0,1,0,16.5,15,1.5,1.5,0,0,0,15,16.5Z"/></svg>

);
