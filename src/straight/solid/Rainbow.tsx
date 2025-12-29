import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rainbow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21H22V15C21.449,1.73,2.546,1.741,2,15v6H0V15C.661-.924,23.345-.911,24,15Zm-4,0H18V15C17.747,7.068,6.25,7.074,6,15v6H4V15C4.4,4.4,19.6,4.407,20,15Zm-4,0H14V15a2,2,0,0,0-4,0v6H8V15a4,4,0,0,1,8,0Z"/></svg>

);
