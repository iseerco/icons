import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowMaximize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,8v-2C0,3.24,2.24,1,5,1h14c2.76,0,5,2.24,5,5v2H0Zm0,2v8c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V10H0Z"/></svg>

);
