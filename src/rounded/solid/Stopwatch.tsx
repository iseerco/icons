import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stopwatch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.732,4.792A3.672,3.672,0,0,0,22,5a1,1,0,0,0,0-2c-.785,0-1-.215-1-1a1,1,0,0,0-2,0,3.513,3.513,0,0,0,.28,1.417l-.706.784A10.923,10.923,0,0,0,13,2.051V1a1,1,0,0,0-2,0V2.051A10.923,10.923,0,0,0,5.426,4.2L4.72,3.417A3.513,3.513,0,0,0,5,2,1,1,0,0,0,3,2c0,.785-.215,1-1,1A1,1,0,0,0,2,5a3.672,3.672,0,0,0,1.268-.208l.672.747a11,11,0,1,0,16.12,0ZM12,15a1.994,1.994,0,0,1-1-3.723V7a1,1,0,0,1,2,0v4.277A1.994,1.994,0,0,1,12,15Z"/></svg>

);
