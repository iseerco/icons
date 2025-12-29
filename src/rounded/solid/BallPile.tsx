import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BallPile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,18.5c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5-1.567,3.5-3.5,3.5-3.5-1.567-3.5-3.5Zm20.5,3.5c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Zm-8.5,0c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Zm4.25-7c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Zm-8.5,0c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Zm4.25-7c1.933,0,3.5-1.567,3.5-3.5s-1.567-3.5-3.5-3.5-3.5,1.567-3.5,3.5,1.567,3.5,3.5,3.5Z"/>
</svg>

);
