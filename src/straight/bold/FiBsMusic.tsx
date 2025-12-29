import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4a3,3,0,0,0-3-3H11A3,3,0,0,0,8,4v8.607A5.5,5.5,0,1,0,11,17.5v-.087h0V4H21v8.607A5.5,5.5,0,1,0,24,17.5v-.063h0ZM5.5,20A2.5,2.5,0,1,1,8,17.5,2.5,2.5,0,0,1,5.5,20Zm13,0A2.5,2.5,0,1,1,21,17.5,2.5,2.5,0,0,1,18.5,20Z"/></svg>

);
