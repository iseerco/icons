import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MugHot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,10H19V9a3,3,0,0,0-3-3H4A3,3,0,0,0,1,9V19a5.006,5.006,0,0,0,5,5h8a5.009,5.009,0,0,0,4.9-4A3.6,3.6,0,0,0,23,16.5v-3A3.5,3.5,0,0,0,19.5,10ZM21,16.5A1.621,1.621,0,0,1,19,18V12a1.621,1.621,0,0,1,2,1.5ZM9,3V1a1,1,0,0,1,2,0V3A1,1,0,0,1,9,3Zm4,0V1a1,1,0,0,1,2,0V3A1,1,0,0,1,13,3ZM5,3V1A1,1,0,0,1,7,1V3A1,1,0,0,1,5,3Z"/></svg>

);
