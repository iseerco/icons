import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CameraMovie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,4c0,2.209-1.791,4-4,4S1,6.209,1,4,2.791,0,5,0s4,1.791,4,4ZM14,0c-2.209,0-4,1.791-4,4s1.791,4,4,4,4-1.791,4-4S16.209,0,14,0Zm5,13v11H0v-11c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Zm2,.244v7.513l3,2.236v-11.985l-3,2.236Z"/></svg>

);
