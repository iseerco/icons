import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRectangleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,3H5.5A5.506,5.506,0,0,0,0,8.5v7A5.506,5.506,0,0,0,5.5,21h13A5.506,5.506,0,0,0,24,15.5v-7A5.506,5.506,0,0,0,18.5,3ZM21,15.5A2.5,2.5,0,0,1,18.5,18H5.5A2.5,2.5,0,0,1,3,15.5v-7A2.5,2.5,0,0,1,5.5,6h13A2.5,2.5,0,0,1,21,8.5Z"/></svg>

);
