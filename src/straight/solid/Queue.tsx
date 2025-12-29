import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Queue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,2.5c0,1.381-1.119,2.5-2.5,2.5S1,3.881,1,2.5,2.119,0,3.5,0s2.5,1.119,2.5,2.5Zm0,6.5v8h-2v7h-2v-7H0v-8c0-1.654,1.346-3,3-3s3,1.346,3,3ZM11.5,0c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5Zm2.5,9v8h-2v7h-2v-7h-2v-8c0-1.654,1.346-3,3-3s3,1.346,3,3Zm5.5-4c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm2.5,4v8h-2v7h-2v-7h-2v-8c0-1.654,1.346-3,3-3s3,1.346,3,3Z"/>
</svg>

);
