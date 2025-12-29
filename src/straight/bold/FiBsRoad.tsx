import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRoad = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,0H7A3.5,3.5,0,0,0,3.55,2.906L0,24H24.033L20.451,2.892A3.5,3.5,0,0,0,17,0ZM3.543,21,6.506,3.414A.5.5,0,0,1,7,3H17a.5.5,0,0,1,.491.4L20.48,21ZM10.5,4h3V8h-3Zm0,6h3v4h-3Zm0,6h3v4h-3Z"/></svg>

);
