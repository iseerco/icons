import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rainbow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21H22V15C21.449,1.73,2.546,1.741,2,15v6H0V15C.661-.924,23.345-.911,24,15Zm-4-6C19.6,4.4,4.4,4.407,4,15v6H6V15c.253-7.932,11.75-7.926,12,0v6h2Zm-4,0a4,4,0,0,0-8,0v6h2V15a2,2,0,0,1,4,0v6h2Z"/></svg>

);
