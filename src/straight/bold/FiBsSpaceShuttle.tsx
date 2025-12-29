import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSpaceShuttle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.846,8.964A7.839,7.839,0,0,0,18.006,8H13.863L10.424,1.824A3.5,3.5,0,0,0,7.351,0H2V6H5V3H7.351a.505.505,0,0,1,.445.272L10.429,8H0v8H10.429L7.79,20.739A.5.5,0,0,1,7.351,21H5V18H2v6H7.351a3.493,3.493,0,0,0,3.066-1.812L13.863,16h4.143a7.839,7.839,0,0,0,3.84-.964c1.78-1,2.154-2.2,2.154-3.036S23.626,9.966,21.846,8.964ZM18,12a1.365,1.365,0,0,1-.6,1H8V11h9.4A1.362,1.362,0,0,1,18,12ZM3,11H5v2H3Z"/></svg>

);
