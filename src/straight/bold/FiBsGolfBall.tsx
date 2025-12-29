import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGolfBall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,12.5A1.5,1.5,0,1,1,12.5,11,1.5,1.5,0,0,1,14,12.5Zm-1-4A1.5,1.5,0,1,0,11.5,10,1.5,1.5,0,0,0,13,8.5Zm1,1A1.5,1.5,0,1,0,15.5,8,1.5,1.5,0,0,0,14,9.5Zm2,7.561v.11a2.981,2.981,0,0,1-.878,2.121L13.5,20.914V24h-3V20.914L8.879,19.293A2.982,2.982,0,0,1,8,17.171V17.06a9,9,0,1,1,8,0ZM18,9a6,6,0,1,0-6,6A6.006,6.006,0,0,0,18,9Z"/></svg>

);
