import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sphere = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>20-sphere</title><path d="M12,18C7.439,18,2.636,17,.358,14.863a11.985,11.985,0,0,0,23.284,0C21.364,17,16.561,18,12,18Z"/><path d="M12,6c4.561,0,9.364,1,11.642,3.137a11.985,11.985,0,0,0-23.284,0C2.636,7,7.439,6,12,6Z"/><ellipse cx="12" cy="12" rx="11" ry="4"/></svg>

);
