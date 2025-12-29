import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCandyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,0A8.986,8.986,0,0,0,7.672,14.207L.064,21.814l2.122,2.122,7.607-7.608A9,9,0,1,0,15,0Zm0,15a6,6,0,0,1-.514-11.974c2.2.205,3.514,1.9,3.514,4.536A2.387,2.387,0,0,1,15.384,10,1.375,1.375,0,0,1,14,8.842c0-.581.292-.842.5-.842H15V5h-.5A3.639,3.639,0,0,0,11,8.842,4.333,4.333,0,0,0,15.384,13,5.328,5.328,0,0,0,20.94,8.2,6.069,6.069,0,0,1,21,9,6.006,6.006,0,0,1,15,15Z"/></svg>

);
