import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRoomService = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,19.092V16A11.007,11.007,0,0,0,13.5,5.115V4.31a1.995,1.995,0,1,0-3,0v.805A11.007,11.007,0,0,0,1,16v3.092A1.5,1.5,0,0,0,1.5,22h21A1.5,1.5,0,0,0,23,19.092ZM12,8a8.009,8.009,0,0,1,8,8v3H4V16A8.009,8.009,0,0,1,12,8Z"/></svg>

);
