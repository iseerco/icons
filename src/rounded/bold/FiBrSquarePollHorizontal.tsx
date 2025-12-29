import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquarePollHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5C2.47,0,0,2.47,0,5.5v13c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,18.5c0,1.38-1.12,2.5-2.5,2.5H5.5c-1.38,0-2.5-1.12-2.5-2.5V5.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v13Zm-2-1c0,.83-.67,1.5-1.5,1.5h-7c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h7c.83,0,1.5,.67,1.5,1.5Zm0-5.5c0,.83-.67,1.5-1.5,1.5H7c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h10.5c.83,0,1.5,.67,1.5,1.5Zm0-5.5c0,.83-.67,1.5-1.5,1.5h-2c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5h2c.83,0,1.5,.67,1.5,1.5Z"/></svg>

);
