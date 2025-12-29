import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignHanging = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,4.418V2h2c.552,0,1-.448,1-1s-.448-1-1-1H5C2.243,0,0,2.243,0,5V23c0,.552,.448,1,1,1s1-.448,1-1V5c0-1.654,1.346-3,3-3h2v2.418c-1.764,.773-3,2.536-3,4.582v6c0,2.757,2.243,5,5,5h10c2.757,0,5-2.243,5-5v-6c0-2.046-1.236-3.809-3-4.582ZM9,2h10v2H9V2Zm13,13c0,1.654-1.346,3-3,3H9c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v6Z"/></svg>

);
