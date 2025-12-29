import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const L = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,24H7c-2.757,0-5-2.243-5-5V1c0-.552,.448-1,1-1s1,.448,1,1V19c0,1.654,1.346,3,3,3h14c.552,0,1,.447,1,1s-.448,1-1,1Z"/></svg>

);
