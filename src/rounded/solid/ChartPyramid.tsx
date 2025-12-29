import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M.587,18.24A4,4,0,0,0,4.179,24H19.82a4,4,0,0,0,3.593-5.76L22.806,17H1.194Z"/><polygon points="19.377 10 4.623 10 2.174 15 21.826 15 19.377 10"/><path d="M15.593,2.275a4,4,0,0,0-7.185,0L5.6,8H18.4Z"/></svg>

);
