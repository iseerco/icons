import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,6v5H13V6ZM11,6H2v5h9Zm7,8a1,1,0,0,1-2,0V13H8v1a1,1,0,0,1-2,0V13H2v1a4.994,4.994,0,0,0,4.278,4.927L4.143,22.485a1,1,0,0,0,1.714,1.03L8.566,19h6.868l2.709,4.515a1,1,0,0,0,1.714-1.03l-2.135-3.558A4.994,4.994,0,0,0,22,14V13H18ZM17,0H7A5.009,5.009,0,0,0,2.1,4H21.9A5.009,5.009,0,0,0,17,0Z"/></svg>

);
