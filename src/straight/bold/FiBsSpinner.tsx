import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSpinner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.415,12.051a12,12,0,0,1,23.17-4.364L20.791,8.779a9,9,0,1,0,0,6.545l2.794,1.092A12,12,0,0,1,.415,12.051Z"/></svg>

);
