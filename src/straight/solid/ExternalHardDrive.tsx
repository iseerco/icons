import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExternalHardDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10v6h-4v-6h1V3c0-.552-.448-1-1-1h-9c-.551,0-1,.448-1,1v1h5c1.654,0,3,1.346,3,3v8H0V7c0-1.654,1.346-3,3-3h5v-1c0-1.654,1.346-3,3-3h9c1.654,0,3,1.346,3,3v7h1ZM0,17h18v7H0v-7Zm13,3.5c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5,1.5Zm-4,0c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5,1.5Z"/>
</svg>

);
