import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRainbow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21H21V15C20.526,3.066,3.47,3.075,3,15v6H0V15C.661-.924,23.345-.911,24,15Zm-5-6C18.67,5.733,5.327,5.74,5,15v6H8V15a4,4,0,0,1,8,0v6h3Zm-5,0a2,2,0,0,0-4,0v6h4Z"/></svg>

);
