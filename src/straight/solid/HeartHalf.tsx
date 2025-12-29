import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HeartHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,24.1l-1.58-1.13C10.25,22.14,0,14.64,0,8.01c-.07-1.92,.61-3.79,1.87-5.1,1.2-1.25,2.81-1.91,4.64-1.91,2.28,.05,4.36,1.29,5.46,3.26,.2,.3,1.02,1.68,1.02,3.74V24.1Z"/></svg>

);
