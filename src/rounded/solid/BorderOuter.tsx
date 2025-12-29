import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BorderOuter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24H5c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h14c2.76,0,5,2.24,5,5v14c0,2.76-2.24,5-5,5ZM5,2c-1.65,0-3,1.35-3,3v14c0,1.65,1.35,3,3,3h14c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3H5Zm12.5,8.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm-5.5,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm7,7c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Zm0-11c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5,1.5-.67,1.5-1.5Z"/></svg>

);
