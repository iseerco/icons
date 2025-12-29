import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquarePollVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5C2.47,0,0,2.47,0,5.5v13c0,3.03,2.47,5.5,5.5,5.5h13c3.03,0,5.5-2.47,5.5-5.5V5.5c0-3.03-2.47-5.5-5.5-5.5Zm2.5,18.5c0,1.38-1.12,2.5-2.5,2.5H5.5c-1.38,0-2.5-1.12-2.5-2.5V5.5c0-1.38,1.12-2.5,2.5-2.5h13c1.38,0,2.5,1.12,2.5,2.5v13ZM8,9.5v8c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V9.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm5.5-3v11c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V6.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Zm5.5,9v2c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-2c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Z"/></svg>

);
