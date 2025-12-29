import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Cheese = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2.143,8.039A20.211,20.211,0,0,1,8.043.96,4.962,4.962,0,0,1,13.751.849L23.332,8H2.673A4.031,4.031,0,0,0,2.143,8.039ZM24,10V24H15a3,3,0,0,0-6,0H4.833C-.529,23.922-.648,14.842.884,11.131A1.977,1.977,0,0,1,2.673,10ZM9,15a2,2,0,0,0-4,0A2,2,0,0,0,9,15Zm11,3a2,2,0,0,0-4,0A2,2,0,0,0,20,18Z"/></svg>

);
