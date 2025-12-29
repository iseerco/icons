import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBarsFilter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5c0,.83-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H22.5c.83,0,1.5,.67,1.5,1.5ZM14.5,20h-5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm4-9H5.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5h13c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"/></svg>

);
