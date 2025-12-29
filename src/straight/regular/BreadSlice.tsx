import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BreadSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23H2V9.979A5,5,0,0,1,5,1H19a5,5,0,0,1,3,8.979ZM4,21H20V8.87l.5-.289A3,3,0,0,0,19,3H5A3,3,0,0,0,3.5,8.581L4,8.87Zm4-9a1,1,0,0,0,0,2A1,1,0,0,0,8,12Zm4,4a1,1,0,0,0,0,2A1,1,0,0,0,12,16ZM8,16a1,1,0,0,0,0,2A1,1,0,0,0,8,16Z"/></svg>

);
