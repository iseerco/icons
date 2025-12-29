import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rainbow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,21a1,1,0,0,1-1-1V15C21.449,1.73,2.546,1.741,2,15v5a1,1,0,0,1-2,0V15C.661-.924,23.345-.911,24,15v5A1,1,0,0,1,23,21Zm-3-1V15C19.6,4.4,4.4,4.407,4,15v5a1,1,0,0,0,2,0V15c.253-7.932,11.75-7.926,12,0v5a1,1,0,0,0,2,0Zm-4,0V15a4,4,0,0,0-8,0v5a1,1,0,0,0,2,0V15a2,2,0,0,1,4,0v5a1,1,0,0,0,2,0Z"/></svg>

);
